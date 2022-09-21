const cars = [{ id: 1, model: "Mazda", year: 2012, color: "Black" }, { id: 2, model: "Mazda", year: 2011, color: "Blue" },]

//GET
// get all cars
const getCars = async () => {
    return cars
}

//GET 
//get car
const getCar = (id) => {
    return cars.find(car => car.id === id)
}
// POST
//create car
const createCar = (obj) => {
    cars.push(obj)
    return cars
}
// PUT
// update car
const updateCar = (id, car) => {
    const index = cars.findIndex(car => car.id === id)
    if (index >= 0) {
        cars[index] = car
        return cars
    }
}

//DELETE
//delete car
const deleteCar = (id) => {
    const index = cars.findIndex(car => car.id === id)
    if (index >= 0) {
        cars.splice(index, 1)
        return cars
    }

}

module.exports = { getCars, getCar, createCar, updateCar, deleteCar }