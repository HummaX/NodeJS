// Error handling in express JS

//Console to Error handling
console.log(err.stack);

app.all("*", (req, res, next) => {
  let err = new Error(`This route ${req.originalUrl} not found`);
  err.status = "fail";
  err.code = 500;
  next(err); // pass this object to next middleware
});

// Keep middleware here to pass error to middleware
// this middlware will work for all either router or anything async error just use this middleware at end and it will take error from enxt and throw from here
app.use((err, req, res, next) => {
      // if status code or error is not coming fro back use default values otherwise it will shwo eeor in html
      err.statusCode = err.status || 500 // mongo never returns status code so chances are error will occur, give default value or throw in error class
      err.message = err.message || 'not found anything'
  //must use next here other will it will throw error in html, as express will consider next middleware sa normal middleware not err middlware
  return res.status(err.code).json({ message: err.message });
});


