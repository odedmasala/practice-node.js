const express = require('express');
const router = express.Router();

const moviesBLL = require('../BLL/moviesBLL');

// http://localhost:8000/movies

//GET
router.get('/', async (req, res) => {
  try {
    const movies = await moviesBLL.getMovies();
    res.status(200).json(movies);
  } catch (e) {
    res.status(500).json(e); // 500 - Internal Server Error
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await moviesBLL.getById(id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(e);
  }
});

//POST
router.post('/', async (req, res) => {
  try {
    const movie = req.body;
    const status = await moviesBLL.createMovie(movie);
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
    const status = await moviesBLL.updateMovie(id, obj);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const status = await moviesBLL.deleteMovie(id);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
