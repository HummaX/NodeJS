// Middlewares

// if we use this middeware at bottom after method is hit it wont execute as express will end reponse cycle and app.use will be left
app.use((req,res,next)=>{
    req.requestTime = new Date() // it will make a new object in req object
    next() //  then it will run next method which get requested by user
})
