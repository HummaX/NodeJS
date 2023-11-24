let mongoose = require('mongoose')

let tourSchema = new mongoose.Schema({
    name:{ type:String,required:[true,'A Tour Must Have a name'],unique:true},
    price:{type:Number, required:[true,'a Tour Must Have a Price']},
    rating:{type:Number, default:4.5},
    difficulty:String,
    summary:String,
    description:String,
    ratingsQuantity:Number,
    maxGroupSize:Number,
    id:Number,
    imageCover:String,
    images:[String],
    startDates:[Date]
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

// tourSchema.virtual('priceMuliplier').get(function(){
// return this.price * 10
// })

tourSchema.post('find',function(doc,next){
    console.log(doc)
})

let Tour = mongoose.model('tour',tourSchema)

module.exports = Tour