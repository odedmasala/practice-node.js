const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  director: String,
  premieredYear: Number,
});

const model = mongoose.model("movies", movieSchema);

module.exports = model;
