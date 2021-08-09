const controller = require('../controller/user')
const auth = require('../middleware/auth')


module.exports = (Router) => { 
    Router.route('/getinfo').get(auth,controller.getInfo)       // forward req to get all users info in user file
    Router.route('/update').post(auth,controller.updateInfo)      // forward req to update info  info in user file
    Router.route('/changepass').post(auth,controller.updatePass)     // forward req to chnage pass info in user file

}