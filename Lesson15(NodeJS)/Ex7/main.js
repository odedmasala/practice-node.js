const express = require("express")
const cors = require("cors")
const app = express()


// middleware - a function 
app.use(cors())
app.use(express.json())

// http://localhost:8000/cars
const carsRouter = require("./Router/carsRouter.js")
app.use("/cars", carsRouter)


app.listen(8000, () => console.log("listening on port 8000"))
