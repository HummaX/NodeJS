// Express Commands

// Response Commands > res
res.send('Any message which will be sent as text')
res.status(200).send('Any message which will be sent as text')
res.status(200).json({data:'data'})

//Request Commands > req

// Routers Methods
// POST
app.post('/',(req,res)=>{
    
})

// DIFFERENCE B/W PUT AND PATCH REQUEST

PUT > // in put client is required to send whole updated object
PATCH > // in PATCH client only has to send that key of the object which got updtaed