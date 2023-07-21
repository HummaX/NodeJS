let fs = require('fs')
let express = require('express')
let app = express()

// parse because data is in json we have to chnage it to object
// we are using readfilesync bcz it will first read whole file then the other code on server, 
//as if file is big and we use reafile it will carsh ths server // VIDEO 52
let tours = JSON.parse(fs.readFileSync('./api-data/tours-simple.json'))

app.get('/',(req,res)=>{
    res.status(200).json({status:"Success",tours:tours})
})

app.listen(3000)