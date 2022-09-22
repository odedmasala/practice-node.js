const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  extraId: String,
  city: String,
  country: String,
});

const model = mongoose.model("users", addressSchema);


module.exports = model;
