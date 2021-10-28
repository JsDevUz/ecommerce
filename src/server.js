const express = require('express');
const { userRouter } = require('./routes/user.router');
const { connectDb } = require('../services/db');
const {addressRouter} = require('./routes/address.router');
const app = express();
app.use(express.json())

app.use('/api/users',userRouter)
app.use('/api/address',addressRouter)

app.use(function(err,req,res,next){
    console.log('err')
    res.status(400).send({
        message: err.message
    })
    next()
})
app.listen(5000,connectDb)