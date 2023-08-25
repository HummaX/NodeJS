let mongoose = require('mongoose')
let express = require('express')
let app = express()
let tourRouter = require('./Controller/tourController')
let addTours = require('./Script/json-to-MongoDB')


mongoose.connect('mongodb+srv://hummasch:PcmvUFwQfXflTR8d@cluster0.tgnuhlf.mongodb.net/NodeJS?retryWrites=true&w=majority').then(()=>{
    console.log('mongoose connected 3')
}).catch((err)=>{
    console.log(err)
})



app.use(express.json())
app.use('/api/v1',tourRouter)
addTours()


app.listen(3000)

