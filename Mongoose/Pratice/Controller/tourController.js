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
     res.status(200).json({status:'Success',reponse:findTour})
}

let testingTour = async(req,res)=>{
    let {year} = req.params
    console.log(year)
    let tourData = await Tour.aggregate([
        {
            $unwind:'$startDates'
        },
        {
        $match:{startDates:{$gte:new Date(`${year}-01-01`),$lte:new Date(`${year}-12-31`)}}
        },
        {
            $group:{
                _id:{$month:'$startDates'},
                tourNumber:{$sum:1},
                toursName:{$push:"$name"}
            },
        }
    ])
    // let tourData = await Tour.find()
    res.json({results:tourData.length,status:'Succcess',data:tourData})
}



router.route('/new').post(newTour)
router.route('/update/:id').patch(updateTour)
router.route('/find').get(tourFiltering)
router.route('/testing/:year').get(testingTour)

module.exports = router