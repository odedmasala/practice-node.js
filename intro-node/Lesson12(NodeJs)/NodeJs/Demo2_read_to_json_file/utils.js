const jFile = require("jsonfile")


exports.getPersonsFromFile = function () {
    return new Promise((resolve, reject) => {
        jFile.readFile("./persons.json", (err, data) => {

            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })

    })

}


