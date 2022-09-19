const express = require('express');
const cors = require('cors');

const personsRouter = require('./routers/personsRouter');

const app = express(); // Server App (instance of express)
const port = 8000;

/* Middlewares */

// Cross-Origin Resource Sharing (CORS) is a mechanism that gives permission for one origin (domain) to access another origin
app.use(cors());

// Parse incoming request bodies in a middleware before the handlers, available under the 'req.body' property
app.use(express.json());

// routers
app.use('/persons', personsRouter);

app.listen(port, () =>
  console.log(`The app is listening at http://localhost:${port}`)
); // The server's Entry Point
