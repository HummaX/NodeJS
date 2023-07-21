// Express Commands


// HTTP METHOD
// these are called HTTP methods we cant thses in headers, instead we have to use req.method to check method type
req.method // to check HTTP method type
get
post
PUT
PATCH

// Response Commands > res
res.send('Any message which will be sent as text')
res.status(200).send('Any message which will be sent as text')
res.status(200).json({data:'data'})

//Request Commands > req

req.method // to check HTTP method type

// Routers Methods
// POST
app.post('/',(req,res)=>{

})

// MIDDLEWARES IN EXPRESS
app.use() // this middleware will run on every request we make on express 

app.use(express.json()) // use it to convert body request to json, otherwise it will show body requets as undefined


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