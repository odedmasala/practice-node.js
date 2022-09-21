const personModel = require("../models/personModel")

const deletePerson = async (id) => {

    try {
        await personModel.findByIdAndDelete(id)
        return "Deleted"
    } catch (e) {
        throw "Error happened, please don't panic"

    }

}

const updatePerson = async (id, obj) => {

    try {
        await personModel.findByIdAndUpdate(id, obj)
        return "updated"
    } catch (e) {
        throw "Error happened, please don't panic"
    }

}

const createPerson = async (obj) => {

    console.log(obj)


    const finalPerson = new personModel({
        FirstName: obj.fname,
        LastName: obj.lname,
        Age: obj.age
    })
    console.log(finalPerson)


    try {
        await finalPerson.save() // saves obj to data base
        return "Created"

    } catch (e) {
        throw "an error happened, panic now!!"
    }




}



const getById = async (id) => {

    const person = await personModel.findById(id)
    console.log(person)
    return person

}

const getPersonByName = async (name) => {

    const data = await personModel.find({ FirstName: name })
    return data

}

const getPersons = async () => {

    // model.find returns a promise or receive a callback function
    const data = await personModel.find({})
    return data
}

// with callback function
// const getPersons = () => {
//     return new Promise((resolve, reject) => {
//         personModel.find({}, (err, data) => {

//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }

//         })
//     })

// }

module.exports = { getPersons, getPersonByName, getById, createPerson, updatePerson, deletePerson }
