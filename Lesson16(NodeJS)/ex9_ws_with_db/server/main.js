const express = require('express');
const cors = require('cors');

const moviesRouter = require('./routers/moviesRouter');

const app = express();

require('./configs/database');

// Middlewares
app.use(cors());
app.use(express.json());

// http://localhost:8000/movies
app.use('/movies', moviesRouter);

app.listen(8000, () => {
  console.log('Server is listening');
});
