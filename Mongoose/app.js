let mongoose = require('mongoose')
let dotenv = require('dotenv')
let express = require('express')
let app = express()

dotenv.config({path:'./config.env'})

let database = process.env.DATABASE
console.log(process.env.DATABASE)
mongoose.connect(database).then(()=>{
    console.log('mongoose connected 2')
}).catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})