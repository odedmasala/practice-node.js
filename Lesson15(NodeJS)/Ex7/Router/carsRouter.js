const express = require("express")
const router = express.Router()

const carsBL = require("../BLs/carsBL")


// status = 500 - server error | 400 - client(user) error || 300 - Redirects || 200 - All is good
// http://localhost:8000/cars
// GET ALL CARS
router.route("/").get(async (request, response) => {

    try {
        const cars = await carsBL.getCars()

        response.status(200).json(cars)
    } catch (err) {

        response.status(500).json({ msg: "error" })
    }
})
//GET one
// http://localhost:8000/cars/id

router.route("/:id").get((request, response) => {

    try {
        const carId = +request.params.id // {id: }
        const car = carsBL.getCar(carId)
        response.status(200).json({ car: car })
    } catch (e) {
        console.log(e)
        response.status(500)
    }

})


//POST
// http://localhost:8000/cars
router.route("/").post((req, res) => {
    try {
        const newCar = req.body
        const status = carsBL.createCar(newCar)
        res.status(200).json({ status })
    } catch (e) {
        res.status(500).json({ msg: "Error occurred" })
    }

})

//PUT
// http://localhost:8000/cars/id

router.route("/:id").put((req, res) => {

    try {
        const carId = +req.params.id // {id: }
        const newCar = req.body
        const cars = carsBL.updateCar(carId, newCar)
        res.status(200).json({ cars })
    } catch (e) {
        console.log(e)
        res.status(500)
    }

})
// http://localhost:8000/cars/id
//DELETE
router.route("/:id").delete((req, res) => {
    try {
        const carId = +req.params.id // {id: }

        const cars = carsBL.deleteCar(carId)
        res.status(200).json({ cars })
    } catch (e) {
        console.log(e)
        res.status(500)
    }

})






module.exports = router