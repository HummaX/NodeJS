require('dotenv').config()
let express = require('express')
let app = express()
let mongoose = require('mongoose')
let routes = require('./routes/routes')

async function connectDB(){
    try{
    let db = await mongoose.connect(process.env.MONGO_DB)
    console.log('DB Connected')
    }catch(e){
        console.log(console.log(e))
    }
}
connectDB()
app.use(express.json(),routes())

app.listen(3000)