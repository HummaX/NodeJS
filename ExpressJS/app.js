let fs = require('fs')
let express = require('express')
let app = express()


app.use(express.json())
// parse because data is in json we have to chnage it to object
// we are using readfilesync bcz it will first read whole file then the other code on server, 
//as if file is big and we use reafile it will carsh ths server // VIDEO 52
let tours = JSON.parse(fs.readFileSync('./api-data/tours-simple.json'))

// app.get('/api/v1/tours',(req,res)=>{
//     res.status(200).json(
//         {
//             status:"Success",
//             results:tours.length,
//             data:{tours:tours}
//         }
//         )
// })


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


app.listen(3000)