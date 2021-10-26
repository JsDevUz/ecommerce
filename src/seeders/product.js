// const bcrypt = require('bcryptjs');
const { ProductModel } = require('../models/product.model');
require('dotenv').config();

const products = [
  {
    name: 'iphone X',
    sku: '10',
    description: "There's the Super Retina display, offering the highest pixel density ever on an iPhone; the 5.8-inch, edge-to-edge OLED screen, with its incredible detail; Face ID, which uses 3D mapping for secure unlocking; and Portrait Mode, for professional-quality photo effects when using either the front- or rear-facing cameras.",
    slug: 'iphone-x-pro-max',
    details: {
        weight: 800,
        weight_units: 'x',
        manufacturer: 'max',
        color: 'black'
    },
    tottal_reviews: 4.7,
    price: 999,
    category: '507f1f77bcf86cd799439011',
    tags: ['phone','iphone','apple'],
    quontity: 76,
  },
  {
    name: 'iwatch',
    sku: '10',
    description: "There's the Super Retina display, offering the highest pixel density ever on an iPhone; the 5.8-inch, edge-to-edge OLED screen, with its incredible detail; Face ID, which uses 3D mapping for secure unlocking; and Portrait Mode, for professional-quality photo effects when using either the front- or rear-facing cameras.",
    slug: 'watches',
    details: {
      weight: 800,
      weight_units: 'x',
      manufacturer: 'max',
      color: 'black'
  },
  tottal_reviews: 4.1,
    price: 54,
    category: '517f191e810c19729de860ea',
    tags: ['watch','smartwatch','apple'],
    quontity: 7,
  }
];

module.exports = async function() {
  try {
    // const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));

    // await Promise.all(products.map(async product => user.password = await bcrypt.hash(user.password, salt)));

    await ProductModel.collection.drop();
    await ProductModel.insertMany(products);
    console.log('Dummy Products inserted');
  } catch (error) {
    console.log('Error on dummy Products');
    console.log(error);
    process.exit(1);
  }
};
