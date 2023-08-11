let fs = require('fs')
let express = require('express')
let morgan = require('morgan')
let app = express()
let dotenv = require('dotenv')

dotenv.config({path:'./config.env'})

// Middlewares
app.use(express.json())
app.use(morgan('tiny'))
app.use((req,res,next)=>{
   console.log(req)
   console.log('data')
    next()
})
// parse because data is in json we have to chnage it to object
// we are using readfilesync bcz it will first read whole file then the other code on server, 
//as if file is big and we use reafile it will carsh ths server // VIDEO 52
let tours = JSON.parse(fs.readFileSync('./api-data/tours-simple.json'))


// Routes Handlers
let getAllTours = app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json(
        {
            status:"Success",
            results:tours.length,
            data:{tours:tours}
        }
        )
})

let toursPostRequest = async(req,res)=>{
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

app.post('/api/v1/tours',toursPostRequest)
app.delete('/api/v1/tours/:id',deleteTour)
// Params
app.get('/api/v1/tours/:id',getTourById)

// methods for same router
app.route('/api/v1/tours').post(toursPostRequest)
app.route('/api/v1/tours/:id').delete(deleteTour).get(getTourById,getAllTours)


app.listen(3000)