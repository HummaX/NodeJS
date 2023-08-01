// we use morgan basically to capture request method,response,size & path


// if we use this middeware at bottom after method is hit it wont execute as express will end reponse cycle and app.use will be left
app.use((req,res,next)=>{
    req.requestTime = new Date() // it will make a new object in req object
    next() //  then it will run next method which get requested by user
})


// Morgan
// with morgan 'dev' it will show in colors
GET /api/v1/tours 200 2.134 ms - 8704

// with morgan 'tiny'
GET /api/v1/tours 200 8704 - 4.589 ms

1) it show method type
2) router where we hit req/res
3) status code
4) time it took to send response
5) data size in bytes

// Morgan in dev Enviroment
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}