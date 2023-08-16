let mongoose = require('mongoose')

let tourSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A Tour Must Have a name'],
        unique:true
    },
    rating:{
type:Number,
default:4.5
    },
    price:{
        type:Number,
        required:[true,'a Tour Must Have a Price']
    }
})

let Tour = mongoose.model('tour',tourSchema)

exports.module = Tour