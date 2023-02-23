const app = require("./index.js")
const connectDB = require("./config/db")
require("dotenv").config()

const port = process.env.PORT || 5000
const host = "localhost"

app.listen(port, () => {
    connectDB()
       console.log(`listening to port http://${host}:${port}`);
})