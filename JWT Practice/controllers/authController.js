let User = require('../Models/userModel')

exports.newUser = async function(req,res){
    try{
let registerUser = new User(req.body)
await registerUser.save()
return res.status(200).json({Status:'Success',message:registerUser})
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