let express = require('express')
let app = express()

let router = express.Router()

// In controller method
let getAllTours = async(req,res)=>{
    let newId = tours[tours.length-1].id +1 
    let toursId = Object.assign({id:newId},req.body)
    console.log(toursId)
}

// In Routes
router.post('/api/v1/tours',getAllTours)
// or

router.route('/api/v1/tours').post(getAllTours)
module.exports = router

//in app.js
app.use('/',allToursRoute)