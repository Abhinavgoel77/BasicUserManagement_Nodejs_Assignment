const controller = require('../controller/user')
const auth = require('../middleware/auth')


module.exports = (Router) => {
    Router.route('/getinfo').get(auth,controller.getInfo)
    Router.route('/update').post(auth,controller.updateInfo)
    Router.route('/changepass').post(auth,controller.updatePass)

}