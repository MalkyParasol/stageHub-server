const mongoose = require('mongoose');

const candidatesSchema =  new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    password:String,
    publicPassword:String,
})

module.exports = mongoose.model("candidates",candidatesSchema);