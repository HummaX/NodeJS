// Express Commands


// HTTP METHOD
// these are called HTTP methods we cant thses in headers, instead we have to use req.method to check method type
req.method // to check HTTP method type
get
post
PUT
PATCH
Delete
app.route
app.params
app.all


// Response Commands > res
res.send('Any message which will be sent as text/html or anything it just checks output and sets header accordingly')
res.render('to redner html file')
res.status(200).send('Any message which will be sent as text json will auto convert it to json')
res.status(200).json({data:'data'})
res.end('its is use to quickly end response without sending any data pr data in header')
res.redirect('/url here') // in case of error or something
res.header("toekn", token) // to set Token in response headers and send to client
res.set('token', `Bearer ${token}`)

//Request Commands > req
req.method // to check HTTP method type
req.requestTime = new Date().toISOString() // to get when that router was hit (custom req object)
req.params // Params
req.body //body json data
req.headers
req.originalUrl // for error if page not found show this cant find this page 
req.query // Query string ?id=10&difficulty=20 // will auto pick id,difficulty dont need to give like params in url of express, by ?
app.get('/api/v1/tours/:id/:id2/:id3?') 
// ? makes parameter optional if we dont put 3rd id in url it will show undefined but will run
// if we require 3rd id and not put ? then this route will not run
// url if :id3? it will run and give 3rd param undefined
http://localhost:3000/api/v1/tours/1/2

// url will not hit/run as 3rd param is not given
http://localhost:3000/api/v1/tours/1/2


// Route Methods with app
// POST
app.post('/api/v1/tours',getAllTours)
app.pust('/api/v1/tours',getAllTours)
app.delete('/api/v1/tours/:id',deleteTour)
// Params
app.get('/api/v1/tours/:id',middlewareFuncntion,getTourById) // can add 2 function in same
// methods for same router
app.route('/api/v1/tours').get(middlewareFuncntion,getAllTours) // can add 2 function in same
app.route('/api/v1/tours/:id').delete(deleteTour).get(middlewareFuncntion,getTourById) // can add 2 function in same


// Router Method with router.use()
// check Router Folder


// MIDDLEWARES IN EXPRESS
app.use((err,req,res,next)) // this middleware will run on every request we make on express 
app.use(express.json()) // use it to convert body request to json, otherwise it will show body requets as undefined
app.params((req,res,next,val)=>{ // params values is saved in val
console.log(val)
})
app.all('/api/') //use * for all routes, will only work with HTTPS requests like (POST, GET, DELETE, PUT) unlike app.use() will run on everything (Check Error Handling below and folder) E.g: Statis pages will show static page for JS templates


// To add or overWrite req,res data
req.requestTime = new Date().toISOString() // this will add cutome obj in req we can use to get request time


// DIFFERENCE B/W PUT AND PATCH REQUEST
PUT > // in put client is required to send whole updated object
PATCH > // in PATCH client only has to send that key of the object which got updated


// Error Handling (Check Folder)
app.all('/api/',(err,req,res,next)=>{ // use * for all routes
return res.status(404).json({message:'Not Found'})
}) // will only work with HTTPS requests like (POST, GET, DELETE, PUT) unlike app.use() will run on everything E.g: Statis pages will show static page for JS templates

//Console to Error handling
console.log(err.stack)
console.error(err)
console.log(err.name)
err.isOperational



// RIGHT WAY OF SENDING JSON DATA
app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json(
        {
            status:"Success",
            results:tours.length, // optional
            data:{tours:tours}
        }
        )
})