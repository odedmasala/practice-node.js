const express = require('express');
const router = express.Router();

const personsBLL = require('../BLL/personsBLL');

// http://localhost:8000/persons

//GET
router.get('/', async (req, res) => {
  try {
    const persons = await personsBLL.getPersons();
    res.status(200).json(persons);
  } catch (e) {
    res.status(500).json(e); // 500 - Internal Server Error
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = await personsBLL.getById(id);
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json(e);
  }
});

//POST
router.post('/', async (req, res) => {
  try {
    const person = req.body;
    const status = await personsBLL.createPerson(person);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

//PUT
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const status = await personsBLL.updatePerson(id, obj);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const status = await personsBLL.deletePerson(id);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
