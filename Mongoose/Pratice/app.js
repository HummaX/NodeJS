let mongoose = require('mongoose')
let express = require('express')
let app = express()
let newTour = require('./Controller/tourController')

mongoose.connect('mongodb+srv://hummasch:PcmvUFwQfXflTR8d@cluster0.tgnuhlf.mongodb.net/NodeJS?retryWrites=true&w=majority').then(()=>{
    console.log('mongoose connected 3')
}).catch((err)=>{
    console.log(err)
})

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

app.use(express.json())
app.use('/api/v1',newTour)

app.listen(3000)

