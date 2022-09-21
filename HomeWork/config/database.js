const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/moviesDB",()=>{
    console.log("connect to database");
})