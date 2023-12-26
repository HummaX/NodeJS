let mongoose = require("mongoose");
// var validator = require('validator');
const bcrypt = require('bcrypt');
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
  }
});

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

module.exports = mongoose.model('User', userSchema);
