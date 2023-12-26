let appError = require('../utils/customError')

exports.jwtHandler = async function(req,res,next){ 

    // 1: Getting Token and checking if its There
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
       token = req.headers.authorization.split(' ')[1]
       next()
    }
    if(!token){
return next(new appError('Your are not logged in',401))
    }
}