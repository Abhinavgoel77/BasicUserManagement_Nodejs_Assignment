const controller = require('../controller/loginregister')
const auth = require('../middleware/auth')
const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination:  (req,file,cb) =>{
        cb(null,'./public')
    },
    filename : (req,file,cb) =>{
        cb(null, Date.now() +'--'+ file.originalname)
    }
})
const upload = multer({storage : fileStorageEngine})

module.exports = (Router) => {
    Router.route('/login').post(auth,controller.login)
    Router.route('/register').post(upload.single('profile_image'),controller.register)

}