// const bcrypt = require('bcryptjs');
const { OrderModel } = require('../models/order.model');
require('dotenv').config();

const order = [
  {
      user: '607f191e810c19729de860ea',
      fullName: 'Jeck MA',
      state: 'CART',
      line_items:[{
        name: 'iphone X',
        sku: '10',
        description: "There's the Super Retina display, offering the highest pixel density ever on an iPhone; the 5.8-inch, edge-to-edge OLED screen, with its incredible detail; Face ID, which uses 3D mapping for secure unlocking; and Portrait Mode, for professional-quality photo effects when using either the front- or rear-facing cameras.",
        slug: 'iphone-x-pro-max',
        price: 999,
        shipping_address: {
            street: 'Main Street',
            flat_number: 72,
            district: 'Avenue',
            region: 'California'
        },
        sub_total: 2
      },
      {
        name: 'iwatch',
        sku: '10',
        description: "There's the Super Retina display, offering the highest pixel density ever on an iPhone; the 5.8-inch, edge-to-edge OLED screen, with its incredible detail; Face ID, which uses 3D mapping for secure unlocking; and Portrait Mode, for professional-quality photo effects when using either the front- or rear-facing cameras.",
        slug: 'watches',
        price: 99,
        shipping_address: {
            street: 'Street',
            flat_number: 21,
            district: 'Ave',
            region: 'Califor'
        },
        sub_total: 7
      }]
  },
  {
    user: '597f191e810c19729de860ea',
    fullName: 'Mr Been',
    state: 'ORDERED',
    line_items:[{
      name: 'Airpods pro 3',
      sku: '10',
      description: "There's the Super Retina display, offering the highest pixel density ever on an iPhone; the 5.8-inch, edge-to-edge OLED screen, with its incredible detail; Face ID, which uses 3D mapping for secure unlocking; and Portrait Mode, for professional-quality photo effects when using either the front- or rear-facing cameras.",
      slug: 'airpods',
      price: 999,
      shipping_address: {
          street: 'New York',
          flat_number: 12,
          district: 'Parij',
          region: 'California'
      },
      sub_total: 1
    }]
}
];

module.exports = async function() {
  try {
    // const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));

    // await Promise.all(products.map(async product => user.password = await bcrypt.hash(user.password, salt)));

    await OrderModel.collection.drop();
    await OrderModel.insertMany(order);
    console.log('Dummy order inserted');
  } catch (error) {
    console.log('Error on dummy order');
    console.log(error);
    process.exit(1);
  }
};
