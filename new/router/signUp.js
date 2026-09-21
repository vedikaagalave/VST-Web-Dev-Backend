let express = require("express")
let router = express.Router()
let user = require('../models/user')

router.get('/',(req,res) => {
    res.send("hello")
    console.log("done")
})
router.post("/signUp", async(req,res)=>{
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


router.get()
module.exports = router