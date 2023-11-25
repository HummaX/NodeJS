// Error handling in express JS

app.all('*',(req,res,next)=>{
    let err = new Error(`This route ${req.originalUrl} not found`)
    err.status = 'fail'
    err.code = 500
    next(err) // pass this object to next middleware
    })
    
 // Keep middleware here to pass error to middleware
    
    app.use((err,req,res,next)=>{ //must use next here other will it will throw error in html, as express will consider next middleware sa normal middleware not err middlware
    return res.status(err.code).json({message:err.message})
    })
    