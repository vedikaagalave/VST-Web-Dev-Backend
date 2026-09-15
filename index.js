// // //  //class 1


// // // // console.log("hello");
// // // const { log } = require('console');
// // // const fs = require('fs') //react way to import
// // // // import fs from 'fs' //traditonal way

// // // //to create folder 
// // // // fs.mkdirSync("folder123")

// // // // to create file 
// // // fs.writeFileSync("index.html","html");
// // // fs.writeFileSync("index.txt","txt");
// // // fs.writeFileSync("index.txt1","txt1");
// // // fs.writeFileSync("folder123/vedika.txt","hello")



// // // // read data from file 
// // // let data = fs.readFileSync("index.html")
// // // console.log(data.toString(),"hehehehe");


// // // // if there is lot of data try to use async coz it will take time to read 

// // // //to add data in file
// // // fs.appendFileSync("index.html","hello2") 
// // // fs.appendFileSync("index.txt"," new data1 new data2")

// // // // to delete file 
// // // fs.unlinkSync("index.txt1")

// // // // to delete folder
// // // // fs.rmdirSync("temp");



// // // //for async wrirefile use callback function
// // // console.log("1")
// // // fs.writeFile("home.txt","hello", () => {
// // //     console.log("maiii")
// // // })
// // // console.log("2")
// // // console.log("A")



// // // //class 2

// // // // os module
// // // let os = require('os')
// // // console.log(os.totalmem()/1024/1024/1024); //total ram
// // // console.log(os.freemem()/1024/1024/1024);
// // // console.log(os.cpus());
// // // console.log(os.arch());
// // // console.log(os.uptime()/3600); //tells total time your device is on

// // // // creating server
// // // let http = require("http")
// // // let server = http.createServer((req,res) => {
// // //     // console.log(req.url,"heheh")
// // //     // res.end("hello")

// // //     // routing 
// // //     if(req.url =='/'){
// // //         res.end("home")
// // //     }else if(req.url == '/about'){
// // //         res.end("about")
// // //     }
// // // })
// // // server.listen(3003,() => {
// // //     console.log("server is running....")
// // // })



// // // using experss creating server
// // let express = require("express")
// // let app = express()


// // // work as security gaurd
// // app.use((req,res,next) => {
// //     console.log("mai hu kaun.........")
// //     next() //ab ye age jane dega
// // })

// // app.get('/',(req,res) => {
// //     res.send("hello server......")
// // })

// // // when u want data from client then u use post 
// // // app.post('/', (req,res) => {
// // //     res.send("post server.....")
// // // })

// // app.listen(3003,()=>{
// //     console.log("server running.....")
// // })


// // //************************************************************************************************** */

// // // req parameter
// // app.get('/new/:id',(req,res)=> { // /: used for dyanamic rounting 
// //     //let id = req.params.id
// //     let {id} = req.params //when u want url of dynamic rounting of client side 
// //     console.log(id,"hehehe")
// //     res.send("new page",id)
// // })

// // app.get('/search',(req,res) => {
// //     console.log(req.query,"ahahaha")
// // // http://localhost:3003/search?firstname=vedika&lastName=Agalave
// // // [Object: null prototype] { firstname: 'vedika', lastName: 'Agalave' } ahahaha
// //     res.send("search page",req.query)
// // })
// // app.get('/data',(req,res) => {
// //     res.send("new data page")
// // })


// // app.post('/data',(req,res) => {
// //     console.log(req.body,"body params")
// //     res.send("new data page")
// // })

// // ***********************************************************************************************************************************************************
// //***********************************************************************************************************************************************************
// //***********************************************************************************************************************************************************
// //***********************************************************************************************************************************************************
// //***********************************************************************************************************************************************************







// let express = require("express");

// let app = express();

// let cors = require("cors");

// app.use(cors());

// app.use(express.json());
//  let products = [
//     {
//         id: 1,
//         name: "iPhone 15",
//         category: "mobile",
//         price: 69999,
//         stock: 10
//     },
//     {
//         id: 2,
//         name: "Galaxy S24",
//         category: "mobile",
//         price: 64999,
//         stock: 8
//     },
//     {
//         id: 3,
//         name: "MacBook Air",
//         category: "laptop",
//         price: 99999,
//         stock: 5
//     },
//     {
//         id: 4,
//         name: "Dell XPS 14",
//         category: "laptop",
//         price: 89999,
//         stock: 7
//     },
//     {
//         id: 5,
//         name: "AirPods Pro",
//         category: "headphones",
//         price: 24999,
//         stock: 15
//     },
//     {
//         id: 6,
//         name: "Sony XM5",
//         category: "headphones",
//         price: 29999,
//         stock: 12
//     }
// ];

// app.get('/',(req,res)=>{
//    res.send(products)
//    // res.send("hehe")


// })
// app.get('/product/:id',(req,res)=>{
//    let {id}=req.params
//   let data= products.find((a)=>{
//       return a.id===Number(id)

//    })
//    if(!data){
//       return res.status(404).json({msg:"not founddddddddd"})
//    }
//    res.status(200).json({msg:data})
//    // console.log(data,"ididid");
   


// })

// app.get('/search',(req,res)=>{
//    let {category}=req.query
//    // console.log(category,"heheeh");
    
//       let data=   products.filter((a)=>{
//             return a.category==category
//          })
//          // console.log(data,"hehe");
//          if(!data){
//             return res.status(404).json({msg:"not founddddddddd"})

//          }
//          res.status(200).json({msg:data})
         
   

// })

//  app.listen(4000,()=>{
//    console.log("server.....");
   

//  })

///////***************************************************************************************
// **************************************************************************************************************************
// ***************************************************************************************
// ***************************************************************************************
// ***************************************************************************************authentication */


let express = require('express')

let mongoose = require('mongoose')

let bcryptjs = require('bcryptjs')

let cors = require('cors')

let app = express()

let User = require('./database/db.js')
let jwt = require('jsonwebtoken')
let crypto = require('crypto')
let {sendEmail} = require('../backend/sendemail.js')

app.use(cors())

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/").then(() => {
    console.log("db connected.....")
})


app.post("/signUp", async(req,res)=>{
   let {name,email,passWord}=req.body
  let findData=   await User.findOne({email})
  console.log(findData,"hjehehe");
  
  if(findData){
   return res.send("user jinda haii....")
  }else{
     let updateddP=   await bcryptjs.hash(passWord,10)
     console.log(updateddP,"dekhoooooo");
     
 let UserInfo=  new User({
      name,email,
      passWord:updateddP

   })
      await UserInfo.save()
      res.send("done.......")
  }


})
app.post('/login',async(req,res) => {
    let {email,passWord} = req.body
    let findData = await User.findOne({email})
    console.log(findData,"gegege")
    let validPass = await bcryptjs.compare(passWord,findData.passWord)
    if(!validPass){
        res.send("dub ke mar ja kuch nhi ho sakta tera")
    }
    let token = jwt.sign({email:findData.email,role:findData.role},"secrate key")
    console.log(token,"user token generated")

    res.send({msg:"done",token:token})
})

let auth = (req,res,next)=>{
    let token = req.headers.authorization;
    console.log(token,"tokeen")

    if(!token){
        return res.send("kaun ho aap")
    }
    let decode = jwt.verify(token,"secrate key")
    console.log(decode,"iseeeeeee");
    req.user = decode;
    next();
}

let rolecheck = (role) => {
    return (req,res,next) => {
        // if(req.user.role !== role){
        //     return res.send("kon hoo aap aap admin toh nhi ho")
        // }
        console.log(req.user,"see this");
        next();
    }

}



app.get('/api',auth, rolecheck("admin"),(req,res)=> {
    res.send("founddddddddd")
})

app.get('/admin', (req,res) => {
    res.send("mein admin hu.....")
})
app.get('/user', (req,res) => {
    res.send("mein user hu.....")
})

app.post('/forget-password', async (req,res) => {
      const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

  
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 4800000; 
    await user.save();


   const resetUrl = `http://localhost:4000/forget-password/${resetToken}`;
    await sendEmail(
      user.email,
      'yee apka password reset ho gya',
      `Click the link below to reset your password:\n\n${resetUrl}`
    );

    res.status(200).send('bhej diya reeee');
  } catch (error) {
    res.status(500).send('Error sending password reset email: ' + error.message);
  }

})
app.listen(4000,()=> {
    console.log("server running.......")

})

