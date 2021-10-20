const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    _id:{
        type: Types.ObjectId
    },
    name:{
        type: String
    },
    sku:{
        type: String
    },
    description:{
        type: String
    },
    slug:{
        type: String
    },
    detail:{
        type: Object
    },
    total_reviews:{
        type: Number
    },
    price:{
        type: Number
    },
    category:{
        type: Types.ObjectId
    },
    tags:[{
        type: String
    }]
})


module.exports = {ProductModel: model('ecommerce',schema)}