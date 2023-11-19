let mongoose = require('mongoose')
let express = require('express')
let app = express()
let morgan = require('morgan')
let tourRouter = require('./Controller/tourController')
let toursScript = require('./Script/json-to-MongoDB')

app.use(morgan('dev'))


mongoose.connect(`mongodb+srv://hummasch:BjFFpaF7GWM2oCsY@cluster0.tgnuhlf.mongodb.net/NodeJS?retryWrites=true&w=majority`).then(()=>{
    console.log('mongoose connected 3')
}).catch((err)=>{
    console.log(err)
})



app.use(express.json())
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString()
    console.log(req.requestTime)
    next()
})
app.use('/api/v1',tourRouter)

app.post('/api/v1/script/addall',toursScript.addTours)
app.delete('/api/v1/script/deleteall',toursScript.deleteAllTours)


app.listen(3000)

