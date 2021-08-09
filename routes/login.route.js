const controller = require('../controller/loginregister')
const auth = require('../middleware/auth')
const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination:  (req,file,cb) =>{
        cb(null,'./public')                     // profile image being stored in public folder
    },
    filename : (req,file,cb) =>{
        cb(null, Date.now() +'--'+ file.originalname)
    }
})
const upload = multer({storage : fileStorageEngine})    // for uploading the profile image 

module.exports = (Router) => {
    Router.route('/login').post(auth,controller.login)         // forward the request to login function in loginregister file and auth is done 
    Router.route('/register').post(upload.single('profile_image'),controller.register)       // forward the request to register function in loginregister file

}