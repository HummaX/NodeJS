// This function is used to avoid try catch in every controller

function catchAsync(fn){ // Higher Order function (function takes para as fucntion and returns function)
    return(req,res,next)=>{ // this is callback function will be retunrned and stored into Expressjs will act as [app.get('/',thisFunction)]
        fn(req,res).catch(next) // upon calling saved return function these values will be afsted to parameter function and it will execute
    }
    }
    
    let tourFiltering = catchAsync(async(req,res)=>{
        let findTour = await Tour.find(req.query)
         return res.status(200).json({status:'Success',reponse:findTour})
    })

// in app.js

let AppError = require("./Utils/Errorclass");
app.all("*", (req, res, next) => {
  next(new AppError(`This route ${req.originalUrl} not found`, 404));
});


app.use(errorController) // will pass here to this fucntiona nd it will throw it

//Could use like this too
// this middlware will work for all either router or anything async error just use this middleware at end and it will take error from enxt and throw from here
app.use((err, req, res, next) => {
  // if status code or erro is not comming fro back use default values otherwise it will shwo eeor in html
      err.statusCode = err.status || 500 // mongo never returns status code so chances are error will occur, give default value or throw in error class
  err.message = err.message || 'not found anything'
  //must use next here other will it will throw error in html, as express will consider next middleware sa normal middleware not err middlware
  return res.status(err.code).json({ message: err.message });
});