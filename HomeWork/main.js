const express = require("express");
const cors = require("cors");
const app = express();

require("./config/database");

app.use(cors());
app.use(express.json());

const movieRouter = require("./routes/moviesRouter");

app.use("/movies", movieRouter);
//  http://localhost:7000/movies
app.listen(7000, () => {
  console.log("server is listen");
});
