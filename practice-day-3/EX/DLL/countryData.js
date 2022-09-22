const model = require("../models/addressModel");

const getUsersCountry = async () => {
  const data = await model.find({});
  return data;
};

// console.log(getUsersCountry());
module.exports = { getUsersCountry };
