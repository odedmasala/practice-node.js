const jFile = require("jsonfile")


const addToFile = function (obj) {

    jFile.readFile("./persons.json", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            let arr = data.persons
            arr.push(obj)
            let fullData = { persons: arr }


            jFile.writeFile("./persons.json", fullData, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Created')
                }
            })


        }
    })



}

addToFile({ name: "Dana", age: 30 })