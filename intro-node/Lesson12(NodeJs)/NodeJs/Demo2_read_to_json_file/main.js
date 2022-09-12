const utils = require("./utils")

// utils.getPersonsFromFile().then(data => console.log(data)).catch(err => console.log(err))


//get persons from file async-await
async function getPersonsFromFile2() {
    try {
        const persons = await utils.getPersonsFromFile()
        console.log(persons)
    } catch (err) {
        console.log(err)
    }
}


getPersonsFromFile2()
