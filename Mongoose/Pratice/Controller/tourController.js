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

function catchAsync(fn){ // Higher Order function (function takes para as fucntion and returns function)
return(req,res,next)=>{ // this is callback function will be retunrned and stored into Expressjs will act as [app.get('/',thisFunction)]
    fn(req,res).catch(next) // upon calling saved return function these values will be afsted to parameter function and it will execute
}
}

let tourFiltering = catchAsync(async(req,res,next)=>{
    let findTour = await Tour.findById(req.params.id)
     return res.status(200).json({status:'Success',reponse:findTour})
})

let testingTour = async(req,res)=>{
    try{
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
}catch(err){
    res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
}
}



router.route('/new').post(newTour)
router.route('/update/:id').patch(updateTour)
router.route('/find/:id').get(tourFiltering)
router.route('/testing/:year').get(testingTour)

module.exports = router