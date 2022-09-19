const express = require('express');
const personsBLL = require('../BLL/personsBLL');

const router = express.Router();

// Entry Point: 'http://localhost:8000/persons'

// Get All Persons
router.route('/').get((req, res) => {
  const persons = personsBLL.getAll();
  return res.json(persons);
});

// Get Person by ID
// the 'id' parameter is available as 'req.params.id'
router.route('/:id').get((req, res) => {
  const { id } = req.params;
  const person = personsBLL.getById(id);
  return res.json(person);
});

// Add a new person
router.route('/').post((req, res) => {
  const obj = req.body;
  const result = personsBLL.addPerson(obj);
  return res.json(result);
});

// Update a person
router.route('/:id').put((req, res) => {
  const { id } = req.params;
  const obj = req.body;
  const result = personsBLL.updatePerson(id, obj);
  return res.json(result);
});

// Delete a person
router.route('/:id').delete((req, res) => {
  const { id } = req.params;
  const result = personsBLL.deletePerson(id);
  return res.json(result);
});

module.exports = router;
