const express = require('express');
const cors = require('cors');

const personsRouter = require('./routers/personsRouter');
const usersRouter = require('./routers/usersRouter');
const carsRouter = require('./routers/carsRouter');

const app = express();

require('./configs/database');

// Middlewares
app.use(cors());
app.use(express.json());

// routers
app.use('/persons', personsRouter);
app.use('/users', usersRouter);
app.use('/cars', carsRouter);

app.listen(8000, () => {
  console.log('Server is listening');
});
