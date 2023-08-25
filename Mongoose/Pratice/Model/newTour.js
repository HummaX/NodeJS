let mongoose = require('mongoose')

let tourSchema = new mongoose.Schema({
    name:{ type:String,required:[true,'A Tour Must Have a name'],unique:true},
    rating:{type:Number, default:4.5},
    summary:String,
    description:String,
    ratingsQuantity:Number,
    maxGroupSize:Number,
    id:Number,
    price:{type:Number, required:[true,'a Tour Must Have a Price']},
    imageCover:String,
    images:[String],
    startDates:[String]
})

let Tour = mongoose.model('tour',tourSchema)

module.exports = Tour