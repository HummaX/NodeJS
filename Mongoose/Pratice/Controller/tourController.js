let express = require('express')
let app = express()
let router = express.Router()

let {Tour} = require('../Model/newTour')


let newTour = (req,res)=>{
let newTour = new Tour(req.body)
res.status(200).json({status:'Success',response:newTour})
}

router.route('/new').post(newTour)

exports.module = router