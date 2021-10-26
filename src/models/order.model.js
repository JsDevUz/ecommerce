const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: 'User'
  },
  fullName: String,
  state: {
    type: String,
    required: true,
    enum: ["CART", "ORDERED", "SHIPPED"]
  },
  line_items: [{
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
    price: {
      type: Number,
      required: true
    },
    shipping_address: {
      street: String,
      flat_number: Number,
      district: String,
      region: String,
    },
    sub_total: Number
  }]
})

module.exports = {
  OrderModel: model('Order', schema),
}