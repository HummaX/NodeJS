// Srting data accesing/decing with one or more queries

let testingTour = async(req,res)=>{

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