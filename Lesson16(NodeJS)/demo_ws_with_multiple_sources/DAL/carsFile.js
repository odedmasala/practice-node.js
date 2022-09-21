const jsonfile = require('jsonfile');

const file = './data/cars.json';

// read from a json file
const getCars = () => {
  return jsonfile.readFile(file);
};

// write to a json file
const setCars = async (obj) => {
  await jsonfile.writeFile(file, obj);
  return 'Done!';
};

module.exports = { getCars, setCars };
