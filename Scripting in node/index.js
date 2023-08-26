let fs = require('fs')
let jsonData = require('./tours-simple.json')
let Tour = require('../Model/newTour')


let addTours = async(req,res)=>{
    try{
await Tour.create(jsonData)
res.status(200).json({message:'Success',response:jsonData})
process.exit()
    }
    catch(err){
     res.status(200).json({message:'Failed',response:err})
    }
}

let deleteAllTours = async(req,res)=>{
    try{
await Tour.deleteMany()
res.status(200).json({message:'Success',response:res})
process.exit()
    }
    catch(err){
        res.status(404).json({message:'Failed',response:err})
    }
}

// node (file name) --import (or give this command any name)
// argv retuns 2 arrays check nodes commands or video (94) 
// this commnand name will be saved in last index of array
if(process.argv[2] === 'import'){ //node (file name) --import
    addTours
}else if(process.argv[2] === 'delete'){ // node (filename) --delete
    deleteAllTours()
}