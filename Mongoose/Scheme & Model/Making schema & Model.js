let mongoose = require('mongoose')

let schema = mongoose.schema()

let tourSchema = new schema({
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

// we define database in link of mongobd then collections in model and push out details in that collectiom/model

// is just programming convetion to use model name/variable with Capital letter
let Tour = ('tour',tourSchema) // it will automatically make collections with name tours, model makes colelctions name in plural
// Name of model, then schema which o use with this model/collection