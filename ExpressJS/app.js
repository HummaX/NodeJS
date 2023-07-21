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

app.post('/api/v1/tours',async(req,res)=>{
    let newId = tours[tours.length-1].id +1 
    let toursId = Object.assign({id:newId},req.body)
    console.log(toursId)
})

app.delete('/api/v1/tours/:id',(req,res)=>{
    let tour = tours.find((tour)=>{
return tour.id == req.params.id
    })
    console.log(tour)
    res.status(204).json({
        status:'Success',
        data:null
    })
})

// Params
app.get('/api/v1/tours/:id',(req,res)=>{
    let tour = tours.find((tour)=>{
return tour.id == req.params.id
    })
    console.log(tour)
})

app.listen(3000)