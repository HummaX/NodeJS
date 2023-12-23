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
  if(!this.isModified('password')) return console.log('modified') // checks if password is modified

  this.password = await bcrypt.hash(this.password, 10) // returns promise
  this.confirmPassword = null // mongoose works only till validation after validation while sending data to DB we can change data

return next()
})