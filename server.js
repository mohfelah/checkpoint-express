// require express
const express = require("express");
const logger = require("./public/middleWare/logger");

//init express
const app = express()
app.use(logger)

//server the static files 
app.use(express.static(__dirname + "/public"))

//init PORT
const PORT = 5000
//server
app.listen(PORT,(err) =>{
    err ? console.log(err)
        : console.log(`server is running on port ${PORT}`)
})

