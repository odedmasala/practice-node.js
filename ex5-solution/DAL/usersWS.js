const axios = require('axios');

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const getUsersByUsername = (username) => {
  return axios.get(`${usersUrl}?username=${username}`);
};

module.exports = { getUsersByUsername };
