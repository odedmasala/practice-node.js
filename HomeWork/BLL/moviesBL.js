const movieModels = require("../models/movieModel");

const getMovies = async () => {
  try {
    const data = await movieModels.find({});
    return data;
  } catch (e) {
    throw `Error ${e}`;
  }
};
const createMovie = async (obj) => {
  const addMovie = new movieModels({
    name: obj.name,
    director: obj.director,
    premieredYear: obj.year,
  });
  try {
    await addMovie.save();
    return "Succeeded"
  } catch (e) {
    throw "an error happened";
  }
};
const updateMovie = async (id, obj) => {
  try {
    await movieModels.findByIdAndUpdate(id, obj);
    return "update";
  } catch (e) {
    throw "Error happened, the movie doesn't update";
  }
};
const getByIdMovie = async (id) => {
  try {
    const movie = await movieModels.findById(id);
    return movie;
  } catch (e) {
    throw "error opened with Get id";
  }
};
const deleteMovie = async (id) => {
  try {
    await movieModels.findByIdAndDelete(id);
    return "delete";
  } catch (e) {
    throw "Error happened, please don't panic";
  }
};

module.exports = {
  createMovie,
  deleteMovie,
  getByIdMovie,
  getMovies,
  updateMovie,
};
