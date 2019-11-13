const { knex } =  require('../src/server/database.js')

const product_images = "product_images"
const products = "products"
const users = "users"

// Deletes existing tables and recreates them
async function resetDB() {
        const dropTable = async (table_name) => {
            console.log(`Dropping ${table_name} table`)
            return knex.schema.dropTableIfExists(table_name)
        }

        await dropTable(users)
        // Must drop product_images table before products table because of foreign key constraint
        await dropTable(product_images)
        await dropTable(products)

        console.log(`Creating ${products} table`)
        await knex.schema.createTable(products, table => {
            table.string('SKU', 255).primary() //SKUs should be unique
            table.string('title', 255)
            table.string('product_info', 511)
            table.string('size_and_fit', 511)
            table.string('materials_and_care', 511)
            table.decimal('price', 6, 3) //6 digits precision (total number of digits), 3 digits scale (# of digits to right of decimal point)
            // The product description displayed in bold to the right of the product image
            table.string('description', 511)
        })

        console.log(`Creating ${product_images} table`)
        await knex.schema.createTable(product_images, table => {
            table.string('SKU', 255).references(`${products}.SKU`)
            table.string('color')
            table.binary('image')
        })

        console.log(`Creating ${users} table`)
        await knex.schema.createTable(users, table => {
            table.string('username').primary()
            table.string('hash')
            // no salt needed because bcrypt stores the salt in the hash
            //table.string('salt')
        })
}

// Inserts sample data into the tables
async function populateDB() {
    console.log(`Populating ${products} table`)
    await knex(products).insert([
        {
            SKU: '36523641234523',
            title: "Unisex Combined Logo & Script Tee",
            product_info: `A large 'GG' logo printed on the front with our customer-favorite script logo underneath.`,
            size_and_fit: `Our model is 5'10" (178 cm), 165 pounds (75 kg), and is wearing a size medium.\nTear away tag.\nClassic fit.`,
            materials_and_care: `50/50 cotton/polyester.\nMachine washable, cold, with like colors.`,
            price: 22.00,
            description: `A portion of this sale goes towards Special Olympics New York. Thank you for continuing to support this great foundation. You can read more about our partnership by visiting the "Our Partners" section of our website.\nClassic, cool, comfortable. The new style in streetwear starts with Gifted.\nWith a fresh yet simple style, Gifted provides a slick, high quality, unisex tee.`,
            //colors: JSON.stringify(['black'])
        },
        {
            SKU: '21354654',
            title: `Unisex 'Everyone Is' Back Reflection Tee`,
            product_info: `'Everyone is' slogan back fade.\nOur classic 'GG' logo on the front left chest with our iconic slogan 'Everyone is' printed repeatedly and reflected on your favorite short sleeve tee.`,
            size_and_fit: `Our model is 5'9" (175 cm), 143 pounds (65 kg) and is wearing a size medium.\nTear away tag.\nClassic fit.`,
            materials_and_care: `50/50 cotton/polyester.\nMachine washable, cold, with like colors.`,
            price: 22.00,
            description: `A portion of this sale goes towards Special Olympics New York. Thank you for continuing to support this great foundation. You can read more about our partnership by visiting the "Our Partners" section of our website.\nClassic, cool, comfortable. The new style in streetwear starts with Gifted.\nWith a fresh yet simple style, Gifted provides a slick, high quality, unisex tee.`,
            //colors: JSON.stringify(['black', 'white'])
        }
    ])
  console.log(`Populating ${users} table`)
  await knex(users).insert([
      {
          username: 'build',
          // This is the hash of "foobar" with salt rounds set to 10
          hash: '$2b$10$4DMSLxrhtoLtVPmgJfG8uOk8u5agQmKjiOHH4j9dbTjk.JxGdriOe'
      }
  ])
}

(async () => {
    console.log("This script is for the DEVELOPMENT DB only.")
    console.log("Do NOT use this on the production DB!")
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
