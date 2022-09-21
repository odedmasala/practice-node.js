const Person = require('../models/personModel');

const getPersons = async () => {
  try {
    return Person.find({});
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const getById = async (id) => {
  try {
    return Person.findById(id);
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const createPerson = async (obj) => {
  try {
    const person = new Person(obj);
    await person.save(); // saves obj to data base
    return 'Created';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const updatePerson = async (id, obj) => {
  try {
    await Person.findByIdAndUpdate(id, obj);
    return 'Updated';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const deletePerson = async (id) => {
  try {
    await Person.findByIdAndDelete(id);
    return 'Deleted';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

module.exports = {
  getPersons,
  getById,
  createPerson,
  updatePerson,
  deletePerson,
};
