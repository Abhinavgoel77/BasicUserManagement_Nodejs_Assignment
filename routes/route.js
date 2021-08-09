
const login = require('./login.route')
const user = require('./user.route')

module.exports = (Router) => {
     login(Router) 
     user(Router)
     return Router 

}