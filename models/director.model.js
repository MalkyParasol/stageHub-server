const mongoose = require('mongoose');

const DirectorSchema =  new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    password:String,
    publicPassword:String,
    uploadedFile: String
})

module.exports = mongoose.model("directors",DirectorSchema);