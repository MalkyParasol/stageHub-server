const mongoose = require('mongoose');

const CoachSchema =  new mongoose.Schema({
    name:String,
    specialization:{
        type:String,
        specializationshhh:["dancing","acting","singing","playing"]
    },
    directorId:String,
    phone:String,
    email:String,
})

module.exports = mongoose.model("coaches",CoachSchema);