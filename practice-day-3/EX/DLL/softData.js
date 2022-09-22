let axios = require("axios");

const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};


module.exports = {getUsers}