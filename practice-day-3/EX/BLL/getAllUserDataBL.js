const  axios  = require("axios");
// const countryData = require("../DLL/countryData");
countryModel = require('../models/addressModel')
const phoneData = require("../DLL/phoneDL");
const softData = require("../DLL/softData");

// require("../config/database")
const allUserData = async () => {
    const {data} = await softData.getUsers()
    return data
}
console.log(allUserData());



