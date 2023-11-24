// There are 2 type of middleware, and middleware can work with Document, Query, Aggregate, Model
// 1: Runs before Document Processing/Working
// 2: Runs after Document Processing/Working

// These Middlwares work only with .save() & .create()

// Middleware before .pre()
tourSchema.pre('find',function(next){ 
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
    console.log(doc) // will show document on wehich we are working
    next()
})