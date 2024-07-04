const mongoose = require('mongoose');

const ShowSchema =  new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
    price: Number,
    numAvailableTickets: Number,
    directorId :String

})

module.exports = mongoose.model("shows",ShowSchema);