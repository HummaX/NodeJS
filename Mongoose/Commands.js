const { model } = require("mongoose")
const Tour = require("./Pratice/Model/newTour")

// Options 
runValidators:true //run validdators to run validation or required once again upon updating,creating document (if false will skip Schema validations eg: Required)
new:true //if true, return the modified document rather than the original in response, if false will retunr old/original document in response
images:[String] // if you want to make a array of string,
startingDates:[Date] // mongodb will automatically parse these string dates into date
//Working
jame.find({},runvalidator:true),'or store these objects in object and point towards that object/variable name')
user.save({validateBeforeSave:false}) // like in reset Password when we send token it will, send it and password is required it will throw error now it will bypass password


// To save model
let newToour = newTour()
await model.save()


// To avoid new tour and saving we could use this instead
//So, if you want to create a new instance of a model and save it to the database in one step, you can use the create method. 
//If you have an existing instance of a model that you want to save to the database, you should use the save method
let newTour = await model.create(req.body) // to avoid tour.save()
let findTour = await Tour.find({}) // To Find all Documents in that collection
let findTourById = await Tour.findAndUpdate({id:id,body:req.body,runValidators:true}) // To Find all Documents in that collection,

// Middlewares (to give pre-filtred data similar to sorting)
// check(middleware folder)
.pre() // operated on documents before returning result
.post() // operates on documents after returning result
/^find/ // One property to run on all findMethods instead of chaining findOne,find,findAndDelete (Check below function)
tourName.pre(/^find/,function({})) // This find will run on all find functions, and filter data on all find peroperties unlike other if i put 'find' her it will only filter in find function and show that secret or any calculated result in findone or findMany, this is shortvut to add all find method just add this


// MongoDB Aggregation (calculation advance sorting)
// check Aggregation Folder


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


// To modify Pipeline of MongoDB (Check middlware folder, Aggregation middleware)
// we run multiple Aggrergations, we cant make changes to all of them if we want to hide/filter some info in them we can run a middleware.
tourSchema.pre('aggregation',function(next){ 
    console.log(this) // it will show show aggregation object
    console.log(this.pipeline()) // will show only aggregation Array with aggergation argunments object
    this.pipeline.unShift({$match: {secretTour:{$ne: true}}}) // Now it will add this into aggregation (Pipeline/Array) which will filter all secret tours
    next()
})

// Bypassing Schema
// In mongoDB schema validation only work until we give thme input they does not work to add those fields in DB
// we give some value in pre hook undefined it will not go to DB instead we just wanted it for validation we can undefine it 

//mongoose does work till validating after that we can do whatever we want like not sendinf data to DB
// once it took input and validated it now its none of its concern, n ew before savinf to DB we can run pre hook
confirmPassword:{
    type:String,
    required:[true, 'Password is required'],
    validate:{validator:function(value){return value === this.password},message:'Password are not same'}
  }
  // In pre hook 
  // wont save confrim password in DB
  this.confirmPassword = undefined  //dont give null

// to avoid empty page with empty results
if(req.query.page){
    let numTours = await Tour.countDocuments()
    if(numTours <= 0) throw new Error('Page not found') // or check video 99 logic itsdifferent 
}




