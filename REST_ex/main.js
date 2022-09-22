const express = require('express')
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
const flyTouter = require('./routers/ruoters')
app.use("/API/fly",flyTouter)

app.listen(8000,()=>{
    console.log('Server is listening');
})