const express = require('express');
const router = express.Router();

const carsBLL = require('../BLL/carsBLL');

// http://localhost:8000/cars

//GET
router.get('/', async (req, res) => {
  try {
    const cars = await carsBLL.getAllCars();
    res.status(200).json(cars);
  } catch (e) {
    res.status(500).json(e); // 500 - Internal Server Error
  }
});

//POST
router.post('/', async (req, res) => {
  try {
    const car = req.body;
    const status = await carsBLL.addCar(car);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
