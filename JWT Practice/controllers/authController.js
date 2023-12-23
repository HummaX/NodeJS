let jwt = require('jsonwebtoken')
let User = require('../Models/userModel')

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
console.log(token)
return res.status(200).header("toekn", token).json({Status:'Success',message:registerUser,token:token})
    }catch(err){
        return res.status(404).json({Status:'Failed',message:err.message})
    }
}

exports.editUser = async function(req,res){
    try{
let updateUser = await User.findOneAndUpdate({id:req.params.id,password:req.body.password})
return res.status(200).json({Status:'Success',message:updateUser})
    }catch(err){
        return res.status(404).json({Status:'Failed',message:err.message})
    }
}