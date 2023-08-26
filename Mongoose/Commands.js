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
let newTour = await model.create(req.body)

let findTour = await Tour.find({}) // To Find all Documents in that collection
let findTourById = await Tour.findAndUpdate({id:id,body:req.body,runValidators:true}) // To Find all Documents in that collection,

// Finding Filtered Data in Mongoose

let filterTour = await Tour.find({difficulty:10,id:1}) // to find specific data
let toue1 = await Tour.find().where('difficuilty').equals(5).where('id').equals(1) // is similar to find just more mongoose methods
