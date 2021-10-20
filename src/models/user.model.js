const {Types, model, Schema} = require('mongoose')

const schema = new Schema({
    _id:{
        type: Types.ObjectId
    },
    username:{
        type: String
    },
    email:{
        type: String
    },
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    password:{
        type: Number
    },
    addresses:[{
        type: Types.ObjectId,
        ref: 'Address'
    }]
})