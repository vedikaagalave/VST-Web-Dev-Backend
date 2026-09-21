let express = require("express")
let signUp = require('./router/signUp')
let login = require('./router/login')
let mongoose = require('mongoose')
let bcryptjs = require('bcryptjs')
let cors = require('cors')
let jwt = require('jsonwebtoken')
let crypto = require('crypto')
let app = express()

app.get("/", (req, res) => {
    res.send("Server is working!")
})

app.listen(3300, () => {
    console.log("server running on port 3300")
})