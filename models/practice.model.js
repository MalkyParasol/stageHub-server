const mongoose = require('mongoose');


const PracticeSchema =  new mongoose.Schema({
    date:Date,
    directorId:String,
    coachId:String,
    actorsId:[String],
    startHour:String,
    endHour:String,
    location:String,
})

module.exports = mongoose.model("practices",PracticeSchema);