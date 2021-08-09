const bcrypt = require('bcrypt')
const multer = require('multer')
const jwt = require('jsonwebtoken')


exports.login = async(req,res) => {
    const user = await allUsers.find(user => user.name = req.body.name)
        console.log(user)
    if(user === null)
    {
        return res.status(400).json('cannot find user')
    }
    else {
        if(await bcrypt.compare(req.body.password,user.password)){
            res.status(200).json({
                success : true,
                message : user
            })       
         }
         else{
             res.send("not allowed")
         }   
}
}

const allUsers = []
exports.allUsers = allUsers

exports.register = async(req,res) =>  {
    const name = req.body.name
    const email = req.body.email 
    const mobile = req.body.mobile 
    const password = await bcrypt.hash(req.body.password,10 )
     const token = jwt.sign(name,  process.env.ACCESS_TOKEN_SECRET)
    const User = RegisterUser(name,email,mobile,password,token)

    res.status(200).json({
        success : true,
        message : User
    })
}
const RegisterUser = (name,email,mobile,password,token) => {
    const User1 = {
     name : name ,
     email : email ,
     mobile : mobile ,
     password : password ,
     accessToken : token
    }
    
    allUsers.push(User1) 
    return token
}
