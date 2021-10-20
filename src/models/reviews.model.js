const {model,Types,Schema} = require('mongoose')

const schema = new Schema({
    _id:{
        type: Types.ObjectId
    },
    product_id:{
        type: Types.ObjectId
    },
    title:{
        type: String
    },
    text:{
        type: String
    },
    rating:{
        type: Number
    },
    user_id:{
        type: Types.ObjectId
    },
    username:{
        type: String
    },
    voter_ids:[{
        type: Types.ObjectId,
        ref: 'User'
    }]
})