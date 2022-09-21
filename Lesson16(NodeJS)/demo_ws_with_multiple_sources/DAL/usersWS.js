const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => {
  return axios.get(url);
};

module.exports = { getUsers };
