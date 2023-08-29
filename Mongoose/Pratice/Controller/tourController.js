let express = require('express')
let app = express()
let router = express.Router()

let Tour = require('../Model/newTour')


let newTour = async (req,res)=>{
let newTour = await Tour.create(req.body)
newTour.save()
res.status(200).json({status:'Success',response:newTour})
}

let updateTour = async (req,res)=>{
    let {id} = req.params
let updateTour = await Tour.findByIdAndUpdate(id,req.body,{
    new:true,
    runValidatores:true
})
await updateTour.save()
return res.status(200).json({status:'success',data:updateTour})
}

let tourFiltering = async(req,res)=>{
    let findTour = await Tour.find(req.query)
    return res.status(200).json({status:'Success',reponse:findTour})
}

let testingTour = async(req,res)=>{
    console.log(req.query)
    req.query.sort = req.query.sort.split(',').join(' ')
    let data = await Tour.find().sort(req.query.sort) // ascending order (lower to higher)
    // url http://localhost:3000/api/v1/testing?sort=price

    // for decending (higher to lower) order put - in price in url of postman eg: http://localhost:3000/api/v1/testing?sort=-price

    // for one or more sorting
    http://localhost:3000/api/v1/testing?sort=-price,-ratingsQuantity
    req.query.sort = req.query.sort.split(',').join(' ')
    let data = await Tour.find().sort(req.query.sort) // decending order (lower to higher) for acendinf remove -

    res.status(200).json({data:data})
}

router.route('/new').post(newTour)
router.route('/update/:id').patch(updateTour)
router.route('/find').get(tourFiltering)
router.route('/testing').get(testingTour)

module.exports = router