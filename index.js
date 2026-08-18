//  //class 1


// // console.log("hello");
// const { log } = require('console');
// const fs = require('fs') //react way to import
// // import fs from 'fs' //traditonal way

// //to create folder 
// // fs.mkdirSync("folder123")

// // to create file 
// fs.writeFileSync("index.html","html");
// fs.writeFileSync("index.txt","txt");
// fs.writeFileSync("index.txt1","txt1");
// fs.writeFileSync("folder123/vedika.txt","hello")



// // read data from file 
// let data = fs.readFileSync("index.html")
// console.log(data.toString(),"hehehehe");


// // if there is lot of data try to use async coz it will take time to read 

// //to add data in file
// fs.appendFileSync("index.html","hello2") 
// fs.appendFileSync("index.txt"," new data1 new data2")

// // to delete file 
// fs.unlinkSync("index.txt1")

// // to delete folder
// // fs.rmdirSync("temp");



// //for async wrirefile use callback function
// console.log("1")
// fs.writeFile("home.txt","hello", () => {
//     console.log("maiii")
// })
// console.log("2")
// console.log("A")



// //class 2

// // os module
// let os = require('os')
// console.log(os.totalmem()/1024/1024/1024); //total ram
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.uptime()/3600); //tells total time your device is on

// // creating server
// let http = require("http")
// let server = http.createServer((req,res) => {
//     // console.log(req.url,"heheh")
//     // res.end("hello")

//     // routing 
//     if(req.url =='/'){
//         res.end("home")
//     }else if(req.url == '/about'){
//         res.end("about")
//     }
// })
// server.listen(3003,() => {
//     console.log("server is running....")
// })



// using experss creating server
let express = require("express")
let app = express()


// work as security gaurd
app.use((req,res,next) => {
    console.log("mai hu kaun.........")
    next() //ab ye age jane dega
})

app.get('/',(req,res) => {
    res.send("hello server......")
})

// when u want data from client then u use post 
// app.post('/', (req,res) => {
//     res.send("post server.....")
// })

app.listen(3003,()=>{
    console.log("server running.....")
})


//************************************************************************************************** */

// req parameter
app.get('/new/:id',(req,res)=> { // /: used for dyanamic rounting 
    //let id = req.params.id
    let {id} = req.params //when u want url of dynamic rounting of client side 
    console.log(id,"hehehe")
    res.send("new page",id)
})

app.get('/search',(req,res) => {
    console.log(req.query,"ahahaha")
// http://localhost:3003/search?firstname=vedika&lastName=Agalave
// [Object: null prototype] { firstname: 'vedika', lastName: 'Agalave' } ahahaha
    res.send("search page",req.query)
})
app.get('/data',(req,res) => {
    res.send("new data page")
})


app.post('/data',(req,res) => {
    console.log(req.body,"body params")
    res.send("new data page")
})



