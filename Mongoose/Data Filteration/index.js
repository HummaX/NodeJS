// to exclude unsupported query strings video(95)
exports.getallTours = async(req,res)=>{
    let queryObj = {...req.query}
    let excludeFields = ['page','sort','limit','fields'] // url ?sort=10&fields=10
    excludeFields.forEach(el => delete queryObj[el] ) // now This will delete query objects if user sends a query check video 95
}


// to use mongoDB operators in mongoose (video 95)
let testingTour = async(req,res)=>{
    let queryString = JSON.stringify(req.query) // since data is not in string we cannot use replace
    queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`) // regex to use
    // this will match these opearators | represnts or oeprator in this regex, and replace takes 2nd argument as function
    let data = await Tour.find(JSON.parse(queryString))
    return res.status(200).json({results:data.length,data:data})
}