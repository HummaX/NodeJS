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