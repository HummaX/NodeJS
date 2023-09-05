const { model } = require("mongoose")
const Tour = require("./Pratice/Model/newTour")

// Options 
runValidators:true //run validdators to run validation or required once again upon updating,creating document
new:true //if true, return the modified document rather than the original in response, if false will retunr old/original document in response
images:[String] // if you want to make a array of string,
startingDates:[Date] // mongodb will automatically parse these string dates into date


// To save model
let newToour = newTour()
await model.save()

// To avoid new tour and saving we coud use this instead
//So, if you want to create a new instance of a model and save it to the database in one step, you can use the create method. 
//If you have an existing instance of a model that you want to save to the database, you should use the save method
let newTour = await model.create(req.body) // to avoid tour.save()
let findTour = await Tour.find({}) // To Find all Documents in that collection
let findTourById = await Tour.findAndUpdate({id:id,body:req.body,runValidators:true}) // To Find all Documents in that collection,

// Finding Filtered Data in Mongoose

let filterTour = await Tour.find({difficulty:10,id:1}) // to find specific data
let filterTour2 = await Tour.find(req.query)  //Query string ?id=10&difficulty=20
let toue1 = await Tour.find().where('difficuilty').equals(5).where('id').equals(1) // is similar to find just more mongoose methods
let tourData = await Tour.find().select('-name') Tour.split(',').join('-') //we can do this in model too for password // to avoid in link use , and chnage them in proegran with -
// Now this will remove these fields from response as it will keep low load on the DB
// MongoDB operators like $gte,$lte usage in mongoose check Data Filteration Folder

// Sorting Data
let data = await Tour.find().sort(req.query.sort) // ascending order (lower to higher) check sorting file

// Pagination

// skip represents (page) amount of data should be skipped, like 10 first results should be skipped skip * limit formula works here (video 99)
//limit represnts number of results from 0-1 if 10, if 20 11-20
await Tour.find().skip(req.query.page).limit(req.query.limit) //http://localhost:3000/api/v1/testing?page=1&limit=1