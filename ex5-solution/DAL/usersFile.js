const jsonfile = require('jsonfile');

const file = './data/users.json';

const getAllUsers = () => {
  return jsonfile.readFile(file);
};

module.exports = { getAllUsers };
