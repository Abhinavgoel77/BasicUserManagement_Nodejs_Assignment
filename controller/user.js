const bcrypt = require('bcrypt')
const login = require('./loginregister')
const auth = require('../middleware/auth')


exports.getInfo = (req,res) => {
    res.json(login.allUsers)         //return all registered user
}

// function to update details of registered user
exports.updateInfo = async(req,res) =>{
   const user = login.allUsers.find(user => user.name = req.body.name)
       console.log(user)
   if(user === null)
   {
       return res.status(400).json('cannot find user')
   }
   else {
       if(await bcrypt.compare(req.body.password,user.password)){
           user.email = req.body.email      // update email
           user.mobile = req.body.mobile     // update password
           res.status(200).json({
               success : true,
               message : user
           })   
        }
        else{
            res.send("not allowed")    // response if pass is wrong
        }   
}
}
 // function for changing the passowrd
exports.updatePass = async(req,res) =>{
   const user = login.allUsers.find(user => user.name = req.body.name)

   if(user === null)
   {
       return res.status(400).json('cannot find user')
   }
   else {
       if(await bcrypt.compare(req.body.password,user.password)){    // comapring old pass before updating the password
           user.password =  await bcrypt.hash(req.body.password,10 )  // hasing new passowrd and updating it in json file
           res.status(200).json({
               success : true,
           })   
        }
        else{
            res.send("not allowed")
        }   
}
}