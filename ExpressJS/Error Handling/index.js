// First we will make a file from where error could be generated either route of mongoDB or any file
// Always use middleware in bottom of files
// must use next when passing and getting and throwing error

// Error stacking (Error comes in object)
//ValidationError: User validation failed: confirmPassword: Password is required (check what is name)
console.log(err.stack)
console.error(err)
console.log(err.name)  // ValidationError
console.log(err.message)
err.isOperational

// MongoDB Error
let tourFiltering = catchAsync(async(req,res,next)=>{ // middleware function is being used
    let findTour = await Tour.findById(req.params.id)
     return res.status(200).json({status:'Success',reponse:findTour})
})

// Routing Error
app.all("*", (req, res, next) => { // here we are passing error to next middleware in Error class, with our error objects
    let err = new Error(`This route ${req.originalUrl} not found`);
    err.status = "fail";
    err.code = 500;
    next(err); // pass this object to next middleware
  });


  // Now Middlewares

  // error capturing Middlware

  // Async error Middlware to avoid try catch in functions
function catchAsync(fn){ // Higher Order function (function takes para as fucntion and returns function)
    return(req,res,next)=>{ // this is callback function will be retunrned and stored into Expressjs will act as [app.get('/',thisFunction)]
        fn(req,res).catch(next) // upon calling saved return function these values will be afsted to parameter function and it will execute
        fn(req,res).catch(err => new AppError('errorname','sttus code',err)) // to send via class
       // will send directly to last error throwing middlware
    }
    }


  // Class middleware

  (req, res, next) => {
    next(new Error('something went wrong'));
  }

  // Extending Class
class AppError extends Error {
    constructor(message, statusCode) {
      super(message); // why we did'nt use this.massage? because we have given message directly to parent class, it will auto pick which ever error comes
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
      this.isOperational = true;
      // if we add this property in our error we can know that this is programming error, it will make it easy for us
      // to know that either it was generated by our code if it contains this object (isOperational) or some other error it is
      Error.captureStackTrace(this, this.constructor);
      // it is use to stack all the errors generated within AppError, actually its original is
      // console.log(err.stack); // to captyre where error occured
      // now this and this.AppError will only stack which errros occured in this called and wont stack other errors of function to aviod mixup of errors
      // video 115
    }
  }

  // To pass error to class
  (req, res, next) => {
    next(new AppError(`This route ${req.originalUrl} not found`, 404));
  }
  

  // Error Throwing Middleware

  // In function
  app.use(errorMiddlewareFunction)

  // With default values
app.use((err,req,res,next)=>{ //must use next here other will it will throw error in html, as express will consider next middleware sa normal middleware not err middlware
    err.statusCode = err.status || 500
    err.message = err.message || 'not found anything'
return res.status(err.statusCode).json({message:err.message})
}) 

//just simple fucntion
  app.use(err,req, res, next){ //must use next here other will it will throw error in html, as express will consider next middleware sa normal middleware not err middlware
    res.status(err.status).json({message:err.message}) // mongo doesnot give status give urslef by default otherwise it will give error in html
  }


// ENV wise Errors
let {devError,prodError} = require('./enviromentsErros')

module.exports = function(err,req,res,next){

if(process.env.ENV == 'dev'){
return devError(err,res)
}else if(process.env.ENV == 'prod'){
    return prodError(err,res)
}
return res.status(err.status || 500).json({message:err.message})
}

exports.devError = function(err,res){
    return res.status(err.status || 500).json({message:err.message,stack:err.stack,error:err,status:err.status})
}

exports.prodError = function (err,res){
   // operational, Trusted Error: send message to client
   if(err.isOperational){
res.status(err.status).json({message:err.message})
   } // Programming or other unKnown Error: dont leak error Details
    return res.status(err.status || 500).json({message:'something went wrong'})
    }



  // Functions
let errorMiddlewareFunction = function(err,req,res,next){
return res.status(err.status || 500).json({message:err.message})
}
