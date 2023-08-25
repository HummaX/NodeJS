let fs = require('fs')
let jsonData = require('./tours-simple.json')
let Tour = require('../Model/newTour')


let addTours = async(res,req)=>{
await Tour.create(jsonData)
res.status(200).json({message:'Success',response:jsonData})
}

module.exports = addTours