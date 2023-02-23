const mongoose = require("mongoose")

let flightSchema = new mongoose.Schema({
    ariline: {type: String},
    flightNo: {type: String},
    departure: {type: String},
    arrival: {type: String},
    departureTime: {type: Date},
    arrivalTime: {type: Date},
    seats: {type: Number},
    price : {type: Number}

}, {
    versionKey: false,
    timestamps: true
})



module.exports = mongoose.model("Flight", flightSchema)
