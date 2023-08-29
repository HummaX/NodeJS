const Tour = require("../Pratice/Model/newTour")

// to exclude unsupported query strings video(95)
exports.getallTours = async(req,res)=>{
    let queryObj = {...req.query}
    let excludeFields = ['page','sort','limit','fields'] // url ?sort=10&fields=10
    excludeFields.forEach(el => delete queryObj[el] ) // now This will delete query objects if user sends a query check video 95
}


// to use mongoDB operators in mongoose (video 96)
let testingTour = async(req,res)=>{
    // URL http://localhost:3000/api/v1/testing?price[gte]=2900&duration[lte]=10
    let queryString = JSON.stringify(req.query) // since data is not in string we cannot use replace
    queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`) // regex to use
    // this will match these opearators | represnts or operator in this regex, and replace takes 2nd argument as function/value
    let data = await Tour.find(JSON.parse(queryString))
    return res.status(200).json({results:data.length,data:data})
}