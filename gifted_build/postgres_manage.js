const { Client } = require('pg');
const knex = require('knex')({
    client: 'pg',
    connection: {
      user: 'build',
      host: 'localhost',
      database: 'api',
      password: 'password',
      port: 5432
    },
    pool: { min: 0, max: 5 } // no logic to these numbers
}); // Without this semicolon the program will break b/c Javascript has a silly parser.

const product_images_table = "product_images"
const products_table = "products"

// Deletes existing tables and recreates them
async function resetDB() {
        // Reset the tables
        console.log(`Dropping ${product_images_table} table`)
        await knex.schema.dropTableIfExists(product_images_table)

        console.log(`Dropping ${products_table} table`)
        await knex.schema.dropTableIfExists(products_table)

        console.log(`Creating ${products_table} table`)
        await knex.schema.createTable(products_table, table => {
            table.string('SKU', 255).primary() //SKUs should be unique
            table.string('title', 255)
            table.string('product_info', 511)
            table.string('size_and_fit', 511)
            table.string('materials_and_care', 511)
            table.decimal('price', 6, 3) //6 digits precision (total number of digits), 5 digits scale (# of digits to right of decimal point)
            // The product description displayed in bold to the right of the product image
            table.string('description', 511)
            // The "conventional" method is to use a linking table
            table.json('colors')
        })

        console.log(`Creating ${product_images_table} table`)
        await knex.schema.createTable(product_images_table, table => {
            table.string('SKU', 255).references(`${products_table}.SKU`)
            table.binary('image')
        })
}

// Inserts sample data into the tables
async function populateDB() {
    console.log(`Populating ${products_table} table`)
    await knex(products_table).insert([
        {
            SKU: '36523641234523',
            title: "Unisex Combined Logo & Script Tee",
            product_info: `A large 'GG' logo printed on the front with our customer-favorite script logo underneath.`,
            size_and_fit: `Our model is 5'10" (178 cm), 165 pounds (75 kg), and is wearing a size medium.\nTear away tag.\nClassic fit.`,
            materials_and_care: `50/50 cotton/polyester.\nMachine washable, cold, with like colors.`,
            price: 22.00,
            description: `A portion of this sale goes towards Special Olympics New York. Thank you for continuing to support this great foundation. You can read more about our partnership by visiting the "Our Partners" section of our website.\nClassic, cool, comfortable. The new style in streetwear starts with Gifted.\nWith a fresh yet simple style, Gifted provides a slick, high quality, unisex tee.`,
            colors: JSON.stringify(['black'])
        },
        {
            SKU: '21354654',
            title: `Unisex 'Everyone Is' Back Reflection Tee`,
            product_info: `'Everyone is' slogan back fade.\nOur classic 'GG' logo on the front left chest with our iconic slogan 'Everyone is' printed repeatedly and reflected on your favorite short sleeve tee.`,
            size_and_fit: `Our model is 5'9" (175 cm), 143 pounds (65 kg) and is wearing a size medium.\nTear away tag.\nClassic fit.`,
            materials_and_care: `50/50 cotton/polyester.\nMachine washable, cold, with like colors.`,
            price: 22.00,
            description: `A portion of this sale goes towards Special Olympics New York. Thank you for continuing to support this great foundation. You can read more about our partnership by visiting the "Our Partners" section of our website.\nClassic, cool, comfortable. The new style in streetwear starts with Gifted.\nWith a fresh yet simple style, Gifted provides a slick, high quality, unisex tee.`,
            colors: JSON.stringify(['black', 'white'])
        }
    ])
}

(async () => {
    let exit_code = 0
    try {
        // Try to get the database version as a sanity check.
        const res = await knex.raw("SELECT version();")
        console.log("Database version: " + res.rows[0].version)

        const args = process.argv.slice(2) // Remove the first 2 args, which are "node" and the file path
        if (args[0] == '-r') {
            await resetDB()
        } else if (args[0] == '-p') {
            await populateDB()
        } else {
            console.log("Unrecognized option. Use -r to reset the database tables and -p to populate them.")
        }
    } catch (e) {
        console.log(e)
        console.log("A database operation most likely failed. Check if ")
        console.log("   1. The database is running")
        console.log("   2. The database has the proper credentials")
        exit_code = 1
    }
    process.exit(exit_code)
})()
