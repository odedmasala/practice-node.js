const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
  {
    name: String,
    director: String,
    premieredYear: Number,
  },
  { versionKey: false }
);

const model = mongoose.model('movie', MovieSchema);

module.exports = model;
