const mongoose = require("mongoose")
const User = require("./user.model")
const Flight = require("./flight.model")

let bookingSchema = new mongoose.Schema({
    user : { type: ObjectId, ref: 'User' },
    flight : { type: ObjectId, ref: 'Flight' }
}, {
    versionKey: false,
    timestamps: true
})



module.exports = mongoose.model("Booking", bookingSchema)
