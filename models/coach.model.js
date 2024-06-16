const mongoose = require('mongoose');

const CoachSchema =  new mongoose.Schema({
    name:String,
    specialization:{
        type:String,
        specializations:["dancing","acting","singing","playing"]
    },
    directorId:String,
    phone:String,
    email:String,
    publicPassword:String,
})

module.exports = mongoose.model("coaches",CoachSchema);