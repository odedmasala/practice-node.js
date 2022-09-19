/* Data Source */
const persons = [
  { id: 1, name: 'Avi', age: 40 },
  { id: 2, name: 'Ron', age: 22 },
  { id: 3, name: 'Dana', age: 34 },
  { id: 4, name: 'Gili', age: 19 },
];

/* CRUD - Create, Read, Update, Delete */

// GET - Get All - Read
const getAll = () => {
  return persons;
};

// GET - Get By ID - Read
const getById = (id) => {
  const person = persons.find((per) => per.id === +id);
  // find() returns 'undefined' if no element are found
  return person ? person : 'There is no such ID';
};

// POST - Create
const addPerson = (obj) => {
  persons.push(obj);
  return 'Created!';
};

// PUT - Update
const updatePerson = (id, obj) => {
  const index = persons.findIndex((per) => per.id === +id);
  if (index !== -1) {
    persons[index] = obj;
    return 'Updated!';
  }
  return "Person wasn't found";
};

// DELETE - Delete
const deletePerson = (id) => {
  const index = persons.findIndex((per) => per.id === +id);
  if (index !== -1) {
    persons.splice(index, 1);
    return 'Deleted!';
  }
  return "Person wasn't found";
};

module.exports = { getAll, getById, addPerson, updatePerson, deletePerson };
