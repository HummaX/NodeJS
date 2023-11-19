let testingTour = async(req,res)=>{
    let tourData = await Tour.aggregate([
        {
            $match:{price: {$gte:10}} // to match price with these condition
        },
        {
            $group:{ // to make calulcations on whole data we fetched which met conditions, it groups all data
                _id:null, // if null it will not juts look for specfic entry instead scan all documents
                _id:{$toUpper:'$difficulty'}, (check group image)
                // if we give field name it will scan all fields of dificulty eg:easy,medium,hard and make different enteries for them and group their calculated data into each object
                num:{$sum:1}, // will add 1 while going each document which matches conditions and keeps adding 1 like a loop till results eg 6 or counted results
                sumRating:{$sum:'$ratingsQuantity'}, // will sum all rating
                minPrice:{$min:'$price'}, // will show min price
                maxPrice:{$max:'$price'},
                avgPrice:{$avg:'$price'}, // will give average of all price
                avgRating:{$avg:'$rating'}
            },
            {
            $sort:{avgPrice:1} // will take group object and sort all entries by given object eg: price ot will sort groups according to price low-high
            },
            {
                $match:{_id:{$ne:'EASY'}} //$ne not include, it will not include easy and filter it, will make mofifications on upper id data
            }
        }
    ])
    res.json({results:tourData.length,status:'Succcess',data:tourData})
}

// Getting tours by months (which month has which tour)
let testingTour = async(req,res)=>{
    let {year} = req.params
    console.log(year)
    let tourData = await Tour.aggregate([
        {
            $unwind:'$startDates'
        },
        {
        $match:{startDates:{$gte:new Date(`${year}-01-01`),$lte:new Date(`${year}-12-31`)}} // id date is saved as string
        },
        {
            $group:{
                _id:{$month:'$startDates'}, // groups id as month of tour
                tourNumber:{$sum:1}, // total tours
                toursName:{$push:"$name"}
            },
        },
        {
            $addFields:{month:'$_id'} // thi will take month from group
        }
    ])
    // let tourData = await Tour.find()
    res.json({results:tourData.length,status:'Succcess',data:tourData})
}

//operators
$match:{price: {$gte:10}} // to match price with these condition
$group:{} // to group all data into 1 object and make calculation on them according to user input
$id:{} // null or field/key which specoific field we want to wrok on
$unwind:'name of array in strings' // to destructure an array
$addFields:{'$ start with $ and use that value which u used in group'} // to add extra field/ or ur choice field