let jwt = require('jsonwebtoken')
let User = require('../Models/userModel')
let appError = require('../utils/customError')

exports.newUser = async function(req,res){
    try{
//let registerUser = new User(req.body) // dont use this, its security flaw
// use this
let {email,password,confirmPassword} = req.body
let registerUser = new User({email,password,confirmPassword})
 await registerUser.save()
let token = jwt.sign({ token: 'Token123' }, 'hummas',);
// 1st Payload
// 2nd Secret KEy
// 3rd algorithm
// 4th expiry key
return res.status(200).header("toekn", token).json({Status:'Success',message:registerUser,token})
    }catch(err){
        return res.status(404).json({Status:'Failed',message:err.message})
    }
}

exports.login = async (req,res,next)=>{

function generateToken(userId){
return jwt.sign({userId:userId},'secret key')
}

let {email,password} = req.body
let userLogin = await User.findOne({email:email})
let token = generateToken(userLogin._id)
let correctPass = await userLogin.loginPassword(password,userLogin.password) // dont use model variable here instead use that variable in which find values are coming

if(!userLogin && !correctPass){
    return next(new appError('Email or Password is Invalid',400))
}
console.log(req.headers)
return res.status(200).set('token', `Bearer ${token}`).json({result:'Success',message:userLogin,token})
}

exports.editUser = async function(req,res){
    try{
let updateUser = await User.findOneAndUpdate({id:req.params.id,password:req.body.password})
return res.status(200).json({Status:'Success',message:updateUser})
    }catch(err){
        return res.status(404).json({Status:'Failed',message:err.message})
    }
}