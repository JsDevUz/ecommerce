const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true
  },
  description: String,
  slug: {
    type: String,
    required: true,
    unique: true
  },
  details: {
    weight: Number,
    weight_units: String,
    manufacturer: String,
    color: String,
  },
  total_reviews: Number,
  price: {
    type: Number,
    required: true
  },
  category: {
    type: Types.ObjectId,
    ref: 'Category'
  },
  tags: [{ type: String }],
  quantity: Number,
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = {
  ProductModel: model('Product', schema)
}