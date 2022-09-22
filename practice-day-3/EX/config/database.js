const mongose = require("mongoose");

mongose.connect("mongodb://localhost:27017/addressDB", () => {
  console.log("connect to database");
});
