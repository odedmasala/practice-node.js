const express = require("express");
const router = express.Router();

const moviesBL = require("../BLL/moviesBL");

router.get("/", async (rep, res) => {
  try {
    const movies = await moviesBL.getMovies();
    res.status(200).json(movies);
  } catch (e) {
    res.status(500).json({ msg: e });
  }
});
moviesBL;

router.get("/:id", async (rep, res) => {
  try {
    const { id } = rep.params.id;
    const movie = await moviesBL.getByIdMovie(id);
    res.status(200).json(movie);
  } catch (e) {
    res.status(500).json({ msg: e });
  }
});

router.post("/", async (rep, res) => {
  try {
    const movie = req.body;
    const status = await moviesBL.createMovie(movie);
    res, status(200).json({ msg: status });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
});

router.put("/:id", async (rep, res) => {
  try {
    const id = rep.params.id;
    const obj = rep.body;
    const movie = await moviesBL.updateMovie(id, obj);
    res.status(200).json({ msg: movie });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
});

router.delete("/:id", async (rep, res) => {
  try {
    const id = rep.params.id;
    const status = await moviesBL.deleteMovie(id);
    res.status(200).json({ msg: status });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
});

module.exports = router;
