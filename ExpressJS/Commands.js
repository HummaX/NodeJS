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

// Response Commands > res
res.send('Any message which will be sent as text/html or anything it just checks output and sets header accordingly')
res.render('to redner html file')
res.status(200).send('Any message which will be sent as text')
res.status(200).json({data:'data'})
res.end('its is use to quickly end response without sending any data pr data in header')

//Request Commands > req
req.method // to check HTTP method type
req.requestTime = new Date().toISOString() // to get when that router was hit (custom req object)
req.params // Params
req.query // Query string ?id=10&difficulty=20 // will auto pick id,difficulty dont need to give like params in url of express, by ?
app.get('/api/v1/tours/:id/:id2/:id3?') 
// ? makes parameter optional if we dont put 3rd id in url it will show undefined but will run
// if we require 3rd id and not put ? then this route will not run
// url if :id3? it will run and give 3rd param undefined
http://localhost:3000/api/v1/tours/1/2

// url will not hit/run as 3rd param is not given
http://localhost:3000/api/v1/tours/1/2


// Routers Methods
// POST
app.post('/',(req,res)=>{

})

// MIDDLEWARES IN EXPRESS
app.use() // this middleware will run on every request we make on express 
app.use(express.json()) // use it to convert body request to json, otherwise it will show body requets as undefined
app.params((req,res,next,val)=>{ // params values is saved in val
console.log(val)
})

// To add or overWrite req,res data
req.requestTime = new Date().toISOString() // this will add cutome obj in req we can use to get request time

// DIFFERENCE B/W PUT AND PATCH REQUEST
PUT > // in put client is required to send whole updated object
PATCH > // in PATCH client only has to send that key of the object which got updated

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