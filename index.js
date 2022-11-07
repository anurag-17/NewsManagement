const cors = require("cors")
const bodyparser = require("body-parser")
const express = require("express");
const app = express()

app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({ limit: "500kb", extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors())
app.use('/api/auth', require('./Routes/routes'))


app.listen(5000, ()=>{
    console.log("running on 5000");
})