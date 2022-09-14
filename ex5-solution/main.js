const usersBLL = require('./BLL/usersBLL');

const username = 'Bret';

usersBLL
  .getUserDataByUsername(username)
  .then((userData) => console.log(userData))
  .catch((error) => console.log(error));
