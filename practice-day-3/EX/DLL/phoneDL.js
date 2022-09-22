const jsonfile = require("jsonfile");

const file = "../data/persons.json";

const getUsersPhone = () => {
  return jsonfile.readFile(file);
};


module.exports = { getUsersPhone };
