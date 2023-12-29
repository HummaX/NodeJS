let appError = require('../utils/customError')
let jwt  = require('jsonwebtoken')
let aSyncFunction = require('../utils/aSyncError')
let User = require('../Models/userModel')

exports.jwtHandler = aSyncFunction(async (req,res,next)=>{ 
console.log('hitted')
    //1: Getting Token and checking if its There
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
    }
    if(!token){
return next(new appError('Your are not logged in',401))
    }

    //2: Verifying Token
let decoding = jwt.verify(token,'hummas') 
// if wrong token,expired token check error.name in middleware and return new fucntion with jwtError and send it via appError
console.log(decoding)

//3: checking if user still exits
let findUser = await User.findById(decoding.token)
if(!findUser){
    next(new appError('user with id does'))
}

// 4:checking if user chnaged password after toekn issuence
if(findUser.checkTokenTimeAndPassword(decoding.iat)){
    return next(new appError('Password Updated login again'))
}

//grant access to protected router
req.user = findUser // will add this in req object and send same to next function/controller
next()
})