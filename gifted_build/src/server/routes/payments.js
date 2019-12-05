const { knex } = require('../database')
const stripeConfig = require('../config').stripe
const stripe = require('stripe')(stripeConfig.secretKey)
const express = require("express");
const router = express.Router()

// Returns the row containing the given SKU
// Would be faster to use knex directly, but this function is more
// re-usable and has better errors
async function getProduct(SKU) {
    const arr = await knex('products')
        .where({SKU: SKU})
    if (arr.length == 0) {
        throw Error(`No product with SKU ${SKU}`)
    } else if (arr.length > 1) {
        // This path should never be reached b/c the SKU is a primary key
        throw Error(`Multiple products with same SKU ${SKU}`)
    }
    return arr[0]
}

async function getProductPrice(SKU) {
    const product = await getProduct(SKU)
    return product.price
}

async function addPayment(paymentId) {
    return knex('orders')
        .insert({payment_id: paymentId})
}

async function calculateOrderAmount(SKUs) {
    let orderAmount = 0.00
    for(const sku of SKUs) {
        orderAmount += await getProductPrice(sku)
    }
    // Stripe wants the order amount in cents
    return orderAmount * 100
}

router.post("/create-payment-intent", async (req, res) => {
    const { items, currency } = req.body;
    const amount = await calculateOrderAmount(items.map(item => item.sku))
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: currency
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
        publishableKey: stripeConfig.publishableKey,
        clientSecret: paymentIntent.client_secret
    });
});

// Expose a endpoint as a webhook handler for asynchronous events.
// Configure your webhook in the stripe developer dashboard
// https://dashboard.stripe.com/test/webhooks
router.post("/finish-payment-intent", async (req, res) => {
    stripe.paymentIntents.retrieve(
        req.body.id,
        (err, intent) => {
            if (err) {
                // This is an internal API error -- the client may have supplied invalid input
                return res.status(400).json({BUILD_error: err.message})
            }
            if (intent.last_payment_error) {
                const payment_error = intent.last_payment_error
                return res.json({
                    status: "failed",
                    message: payment_error.message
                })
            }
            return res.json({
                status: "succeeded",
                client_secret: intent.client_secret
            })
        }
    )
});

module.exports = router
