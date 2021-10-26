// const bcrypt = require('bcryptjs');
const { CategoryModel } = require('../models//category.model');
require('dotenv').config();

const categorys = [
  {
    title: 'phones',
    description: 'this is all phones',
    slug: 'iphone',
    parent: '507f1f77bcf86cd799439011',
  },
  {
    title: 'wears',
    description: 'this is all phones',
    slug: 'wears',
    parent: '507f191e810c19729de860ea',
  },
  {
    title: 'airpods',
    description: 'this is all phones',
    slug: 'airpods',
    parent: '527f191e810c19729de860ea',
  },
  {
    title: 'watches',
    description: 'this is all phones',
    slug: 'watches',
    parent: '517f191e810c19729de860ea',
  }
];

module.exports = async function() {
  try {
    // const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));

    // await Promise.all(products.map(async product => user.password = await bcrypt.hash(user.password, salt)));

    await CategoryModel.collection.drop();
    await CategoryModel.insertMany(categorys);
    console.log('Dummy categorys inserted');
  } catch (error) {
    console.log('Error on dummy categorys');
    console.log(error);
    process.exit(1);
  }
};
