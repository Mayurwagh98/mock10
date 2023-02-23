const router = require("express").Router()
const Flight = require("../models/flight.model")


router.post("/flights", async(req, res) =>{
    const {ariline, flightNo, departure,arrival,departureTime, arrivalTime, seats,price} = req.body
    try {
        
        if(!ariline || !flightNo || !departure || !arrival || !departureTime || !arrivalTime || !seats || !price){
            return res.status(400).json("All fields requried")
        }

        const newFlight = new Flight(req.body)
        
        const savedFlight = await newFlight.save()

        res.status(201).json(savedFlight)
        
       

    } catch (error) {
        res.status(500).json(error.message)
    }
})


router.get("/flights", async(req, res) =>{
    
    try {

        const flightData = await Flight.find()

        res.status(200).json(flightData)
        
       
    } catch (error) {
        res.status(500).json(error.message)
    }
})


router.get("/flights/:id", async(req, res) =>{
    // console.log(req.params)
    try {

        const singleFlightData = await Flight.findById(req.params.id)

        res.status(200).json(singleFlightData)
        
       
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.patch("/flights/:id", async(req, res) =>{
    
    try {

    await Flight.findByIdAndUpdate(req.params.id, req.body)

        res.status(204)
        
       
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.delete("/flights/:id", async(req, res) =>{
    
    try {

        await Flight.findByIdAndDelete(req.params.id)

        res.status(202).json("deleted")
        
       
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router