const mongoose = require('mongoose');

const ProviderSchema =  new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    product:String,
    price:Number,
    password:String
})

module.exports = mongoose.model("providers",ProviderSchema);