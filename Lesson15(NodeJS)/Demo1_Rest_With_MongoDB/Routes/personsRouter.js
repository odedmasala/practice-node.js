const express = require("express")
const router = express.Router()

const personsBL = require('../BLs/personsBL')

// router.route("/").get((req,res) => {

// })

// http://localhost:8000/persons
//GET
router.get("/", async (req, res) => {
    try {
        const persons = await personsBL.getPersons()
        res.status(200).json(persons)
    } catch (e) {
        res.status(500).json({ msg: e })
    }

})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const person = await personsBL.getById(id)
    res.status(200).json(person)
})


// http://localhost:8000/persons/name/Gil

router.get("/name/:name", async (req, res) => {
    const name = req.params.name
    const person = await personsBL.getPersonByName(name)
    res.status(200).json(person)
})



//POST
// http://localhost:8000/persons

router.post("/", async (req, res) => {
    try {
        const person = req.body
        const status = await personsBL.createPerson(person)
        res.status(200).json({ msg: status })
    } catch (e) {
        res.status(500).json({ err: e })
    }


})

// http://localhost:8000/persons/id
//PUT
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const obj = req.body
        const status = await personsBL.updatePerson(id, obj)
        res.status(200).json(status)
    } catch (e) {
        res.status(500).json({ msg: e })
    }


})

//DELETE
// http://localhost:8000/persons/id
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id

        const status = await personsBL.deletePerson(id)
        res.status(200).json(status)
    } catch (e) {
        res.status(500).json({ msg: e })
    }


})

module.exports = router