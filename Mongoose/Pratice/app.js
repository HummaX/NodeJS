let mongoose = require('mongoose')
let express = require('express')
let app = express()
let {newTour} = require('./Controller/tourController')

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

app.use('/api/v',newTour)

app.listen(3000)

