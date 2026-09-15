const express = require("express")
const app = express();
const fs = rrquire("fs")
app.get("/",(req,res) => {
    fs.readdir("./files" ,(err,files) => {
        if(err) return res.status(500).res.send(err)
    res.render("index")
    })
})
