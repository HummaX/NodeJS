const { model } = require("mongoose")

// Queries 
runValidators:true //run validdators to run validation or required once again upon updating,creating document


// To save model
let newToour = newTour()
await model.save()

// To avoid new tour and saving we coud use this instead
//So, if you want to create a new instance of a model and save it to the database in one step, you can use the create method. 
//If you have an existing instance of a model that you want to save to the database, you should use the save method
let newTour = await model.create(req.body)

let findTour = await Tour.find({}) // To Find all Documents in that collection
let findTourById = await Tour.findAndUpdate({id:id,body:req.body,runValidators:true}) // To Find all Documents in that collection,
