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

router.route('/new').post(newTour)
router.route('/update/:id').patch(updateTour)
router.route('/find').get(tourFiltering)

module.exports = router