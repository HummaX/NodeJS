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

// Router Commands
let router = express.Router()

router.use('/'function()) // middleware similar to app.use but for just routes app.use comes on application level it comes on small level

router.post()
router.route('/api',function()).post()

// Invalid Route
app.all('/api/',(err,req,res,next)=>{ // use * for all routes
    return res.status(404).json({message:'Not Found'})
    }) // will only work with HTTPS requests like (POST, GET, DELETE, PUT) unlike app.use() will run on everything E.g: Statis pages will show static page for JS templates
