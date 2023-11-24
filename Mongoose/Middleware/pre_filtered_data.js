// check video 100
// we use this middleware to isnead giving too many arguments we can define 1 link jus to get osrted data by our need or limited data

exports.tourMiddleware = async(req,res,next)=>{
    req.query.sort = '-price',
    next()
}

let testingTour = async(req,res)=>{
    let tourData = await Tour.find().sort(req.query.sort)
    res.json({results:tourData.length,status:'Succcess',data:tourData})
}

// now in router 
router.route('/soredt-By-price',this.tourMiddleware,testingTour) // first it will get queries through 1st fucntion then passwdown to next 