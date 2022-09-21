const express = require("express")
const cors = require("cors")
const app = express()

require("./config/database")

app.use(cors())
app.use(express.json())





const personsRouter = require("./Routes/personsRouter")
// http://localhost:8000/persons
app.use("/persons", personsRouter)

app.listen(8000, () => {
    console.log("Server is listening")
})