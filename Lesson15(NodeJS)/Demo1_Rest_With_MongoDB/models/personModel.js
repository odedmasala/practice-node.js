const mongoose = require("mongoose")


const PersonSchema = new mongoose.Schema({
    // FirstName: { type: String, required: true },
    FirstName: String,
    LastName: String,
    Age: Number,
    /*
    Phones: [String],
    Address: { city: String, street: String, number: Number }
*/

})


const model = mongoose.model("persons", PersonSchema)


module.exports = model


