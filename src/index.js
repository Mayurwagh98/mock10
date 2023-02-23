const express = require("express")
const app = express()

app.use(express.json())

const userRoute = require("./routes/user.routes")
const flightRoute = require("./routes/flight.routes")

app.use("/api", userRoute)
app.use("/api", flightRoute)


module.exports = app