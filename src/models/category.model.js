const { Schema, model, Types } = require('mongoose');
const schema = new Schema({
  title: {
    type: String,
    required: [true, 'Please enter category title']
  },
  description: String,
  slug: {
    type: String,
    required: true,
    unique: true
  },
  parent: {
    type: Types.ObjectId,
    ref: 'Category'
  }
})

module.exports = {
  CategoryModel: model('Category', schema),
}