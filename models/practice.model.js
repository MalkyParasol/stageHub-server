const mongoose = require('mongoose');

const PracticeSchema =  new mongoose.Schema({
    date:Date,
    directorId:String,
    coachId:String,
    actorsId:[String]
})

module.exports = mongoose.model("practices",PracticeSchema);