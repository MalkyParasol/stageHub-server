const mongoose = require('mongoose');
const { number } = require('yup');

const OrderSchema =  new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    amount:Number,
    showId:String,
    qrcode:String,
    pdf:String
})

module.exports = mongoose.model("orders",OrderSchema);