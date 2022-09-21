const Movie = require('../models/movieModel');

const getMovies = async () => {
  try {
    return Movie.find({});
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const getById = async (id) => {
  try {
    return Movie.findById(id);
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const createMovie = async (obj) => {
  try {
    const movie = new Movie(obj);
    await movie.save(); // saves obj to data base
    return 'Created';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const updateMovie = async (id, obj) => {
  try {
    await Movie.findByIdAndUpdate(id, obj);
    return 'Updated';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const deleteMovie = async (id) => {
  try {
    await Movie.findByIdAndDelete(id);
    return 'Deleted';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

module.exports = {
  getMovies,
  getById,
  createMovie,
  updateMovie,
  deleteMovie,
};
