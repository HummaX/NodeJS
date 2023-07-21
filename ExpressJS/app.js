let fs = require('fs')
let express = require('express')
let app = express()

// parse because data is in json we have to chnage it to object
let tours = JSON.parse(fs.readFileSync('./api-data/tours-simple.json'))
console.log(tours)

app.get('/',(req,res)=>{
    res.status(200).json({tours:tours})
})

app.listen(3000)