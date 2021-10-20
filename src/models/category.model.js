const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id:{
        type: Types.ObjectId,
    },
    name: {
        type: String
    },
    slug:{
        type: String,
    },
    parent_id:{
        type: Types.ObjectId,
    },
    description:{
        type: String,
    },
})

module.exports = {CategoryModel: model('ecommerce',schema)}