const router = require("express").Router()
const Booking = require("../models/booking.model")
const User = require("./user.model")
const Flight = require("./flight.model")


router.get("/dashboard", async(req, res) =>{
    
    try {

        const bookingData = await Booking.find()

        res.status(200).json(bookingData)
        
       
    } catch (error) {
        res.status(500).json(error.message)
    }
})
