let express = require('express')
let router = express.Router()
let authController = require('../controllers/authController')
let jwtHandler = require('../Middleware/jwtHandler')

module.exports = function(){
    router.route('/register').post(authController.newUser)
    router.route('/allUsers').get(jwtHandler.jwtHandler,authController.findAllUsers)
    router.route('/login').post(authController.login)
    router.route('/update/:id').put(authController.editUser)
    // router.route('/update/:id').delete(jwtHandler,jwtHandler.userPermissions('admin','tour-Organiser'),authController.deleteUser)
    return router
};