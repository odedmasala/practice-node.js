const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  { versionKey: false }
);

const Person = mongoose.model('persons', PersonSchema);

module.exports = Person;
