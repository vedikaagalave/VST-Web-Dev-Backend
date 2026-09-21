let express = require("express")
let router = express.Router()
let user = require('../models/user')

router.get('/',(req,res) => {
    res.send("hello")
    console.log("done")
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
module.exports = router