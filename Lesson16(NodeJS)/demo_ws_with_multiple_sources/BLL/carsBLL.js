const carsFile = require('../DAL/carsFile');

const getAllCars = async () => {
  const { cars } = await carsFile.getCars();
  return cars;
};

const addCar = async (obj) => {
  const cars = await getAllCars();
  cars.push(obj);
  const data = { cars };
  const result = await carsFile.setCars(data);
  return result;
};

module.exports = { getAllCars, addCar };
