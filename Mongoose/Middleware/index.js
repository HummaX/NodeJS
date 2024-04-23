// There are 2 type of middleware, and middleware can work with Document, Query, Aggregate, Model
// 1: Runs before Document Processing/Working/savingInDB (wont shown data in post middleware)
// 2: Runs after Document Processing/Working/saving (independent from mnongoose validations)

//mongoose does work till validating after that we can do whatever we want like not sending data to DB
// once it took input and validated it now its none of its concern, now before saving to DB we can run pre hook

// These Middlwares work only with .save() & .create()

// Document Middlewares
// Middleware before .pre()
tourSchema.pre('find',function(next){ // canot use without function arrow function does not have this keyword bound
    console.log('will save document')
    next() // otherwise wit will no go to next middleware
})

tourSchema.pre('save',function(next){ //save represents .save() function
    this.name = this.name.tolowerCase()
    console.log(this.name)
    next() // otherwise it will no go to next middleware
})

// Middleware After .post()
tourSchema.post('save',function(doc,next){ //save represents .save() function
    console.log(this.name)
    next() // otherwise it will no go to next middleware
})

tourSchema.post('find',function(doc,next){
    console.log(doc) // will show document on which we are working
    next()
})

// Query Middlewares
tourSchema.pre(/^find/,function(next){ // This find will run on all find functions, and filter data on all find peroperties unlike other if i put 'find' here it will only filter in find function and show that secret or any calculated result in findone or findMany, this is shortcut to add all find method just add this
    this.find({password:{select:false}}) // will not return password
    this.start = Date.now()
    next()
    // we can run find method here too
})

tourSchema.post('find',function(doc,next){
    console.log(`This quer took ${Date.now() - this.start} milliSeconds`)
    console.log(doc) // will show document on which we are working
    next() // must use otehrwise poastman will be stuck
})

// Aggregation Middleware

// we run multiple Aggrergations, we cant make changes to all of them if we want to hide/filter some info in them we can run a middleware.
tourSchema.pre('aggregation',function(next){ 

    console.log(this) // it will show show aggregation object
    console.log(this.pipeline()) // will show only aggregation Array with aggergation argunments object

    this.pipeline.unShift({$match: {secretTour:{$ne: true}}}) // Now it will add this into aggregation (Pipeline/Array) which will filter all secret tours
    next()
})


// Methods

// How t call thses Methods
let user = User.find()
// we can access these methods from this user object
user.generatePasswordResetToken()
// if updating model
user.save()

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