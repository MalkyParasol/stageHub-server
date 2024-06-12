const mongoose = require('mongoose');

const ManagerSchema =  new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    password:String
})

module.exports = mongoose.model("managers",ManagerSchema);