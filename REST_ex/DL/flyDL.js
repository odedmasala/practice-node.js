const axios = require("axios");

const getData = () => {
  return axios.get('https://data.vatsim.net/v3/vatsim-data.json')
};

module.exports = {getData}
