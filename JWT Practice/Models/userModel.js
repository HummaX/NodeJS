let mongoose = require("mongoose");
// var validator = require('validator');
const bcrypt = require('bcrypt');
let crypto = require('crypto')

let Schema = mongoose.Schema;

let userSchema = new Schema({
  email: {
      type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type:String,
    required: true,
    minLength: 8,
  },
  confirmPassword:{
    type:String,
    required:[true, 'Password is required'],
    validate:{validator:function(value){return value === this.password},message:'Password are not same'}
  },
  passwordChanged:Date,
  passwordResetToken:String,
  passwordExpires:Date
},{timestamps:true});

userSchema.pre('save',async function(next){
  if(!this.isModified('password')) return console.log('modified')

  this.password = await bcrypt.hash(this.password, 10)
  this.confirmPassword = null

return next()
})

userSchema.pre('/^find/',async function(next){
  if(this.isModified('password')) return console.log('modified')
return next()
})

userSchema.methods.loginPassword = async function(bodyPassword,hashedDBPassword){
  return await bcrypt.compare(bodyPassword,hashedDBPassword)
}

userSchema.methods.checkTokenTimeAndPassword = async function(jwtIAT){
  if(this.passwordChanged){
return this.passwordChanged.getTime() > jwtIAT // auto return true false
  }
  return false
}

userSchema.methods.generatePasswordResetToken = async function(){
  let resetToken = crypto.randomBytes(20).toString('hex')
  crypto.createHash('sha256').update(resetToken).digest('hex')
  this.passwordResetToken = resetToken
  this.passwordExpires = new Date() + 10 * 60 * 1000
  console.log(this)
  return resetToken
}

module.exports = mongoose.model('User', userSchema);
