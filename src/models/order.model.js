const {Schema, Types, model} = require('mongoose')

const schema = new Schema({
    _id:{
        type: Types.ObjectId
    },
    user_id:{
        type: Types.ObjectId
    },
    state:{
        type: String
    },
    line_items:[{
        type: Types.ObjectId,
        ref: 'Product'
    }],
    shipping_address:{
        type: Object
    },
    sub_total:{
        type: Number
    }

})

module.exports = {OrderModel: model('ecommerce',schema)}