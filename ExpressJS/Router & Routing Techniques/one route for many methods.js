// if we have multiple method like post,patch,delete on one router we can do this

app.route('/api/v1/tours').get(getAllTours)
app.route('/api/v1/tours/:id').delete(deleteTour).get(getTourById)


// Rest fo code
let getAllTours = async(req,res)=>{
    let newId = tours[tours.length-1].id +1 
    let toursId = Object.assign({id:newId},req.body)
    console.log(toursId)
}

let deleteTour = (req,res)=>{
    let tour = tours.find((tour)=>{
return tour.id == req.params.id
    })
    console.log(tour)
    res.status(204).json({
        status:'Success',
        data:null
    })
}

let getTourById = (req,res)=>{
    let tour = tours.find((tour)=>{
return tour.id == req.params.id
    })
    console.log(tour)
}

app.post('/api/v1/tours',getAllTours)
app.delete('/api/v1/tours/:id',deleteTour)
// Params
app.get('/api/v1/tours/:id',getTourById)

// methods for same router
app.route('/api/v1/tours').get(getAllTours)
app.route('/api/v1/tours/:id').delete(deleteTour).get(getTourById)

// Other method to use router
app.use('/',router()) // have to execute router fucntion here to get route object

// in router file

module.export = async()=>{
    router.route('/login',function())
    return router // we need router value if we return router it will get executed and will retun routes
}