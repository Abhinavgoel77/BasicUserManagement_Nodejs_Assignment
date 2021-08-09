const bcrypt = require('bcrypt')
const login = require('./loginregister')
const auth = require('../middleware/auth')


exports.getInfo = (req,res) => {
    res.json(login.allUsers)
}


exports.updateInfo = async(req,res) =>{
   const user = login.allUsers.find(user => user.name = req.body.name)
       console.log(user)
   if(user === null)
   {
       return res.status(400).json('cannot find user')
   }
   else {
       if(await bcrypt.compare(req.body.password,user.password)){
           user.email = req.body.email
           user.mobile = req.body.mobile    
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

exports.updatePass = async(req,res) =>{
   const user = login.allUsers.find(user => user.name = req.body.name)

   if(user === null)
   {
       return res.status(400).json('cannot find user')
   }
   else {
       if(await bcrypt.compare(req.body.password,user.password)){
           user.password =  await bcrypt.hash(req.body.password,10 ) 
           res.status(200).json({
               success : true,
           })   
        }
        else{
            res.send("not allowed")
        }   
}
}