let express = require('express')
let router = express.Router()
let authController = require('../controllers/authController')

module.exports = function(){
    router.route('/register').post(authController.newUser)
    router.route('/login').post(authController.login)
    router.route('/update/:id').put(authController.editUser)
    return router
};