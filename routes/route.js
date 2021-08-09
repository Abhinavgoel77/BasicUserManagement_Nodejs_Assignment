
const login = require('./login.route')   // forward to login.route.js
const user = require('./user.route')     // forward to user.route.js

module.exports = (Router) => {
     login(Router) 
     user(Router)
     return Router 

}