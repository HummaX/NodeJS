// to get Date of req
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString() // will make a custom request time or overwrite it with data
    console.log(req.requestTime)
    next()
})