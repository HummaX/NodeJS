let mongoose = require('mongoose')
let AppError = require('./Utils/Errorclass')
let Tour = require('./Model/newTour')
let express = require('express')
let app = express()
const bodyParser = require('body-parser');
let morgan = require('morgan')
let tourRouter = require('./Controller/tourController')
let toursScript = require('./Script/json-to-MongoDB')
let errorMiddleware = require('./Utils/ErrorController')

app.use(morgan('dev'))


mongoose.connect(`mongodb+srv://hummasch:BjFFpaF7GWM2oCsY@cluster0.tgnuhlf.mongodb.net/NodeJS?retryWrites=true&w=majority`).then(()=>{
    console.log('mongoose connected 3')
}).catch((err)=>{
    console.log(err)
})



app.use(express.json())
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString()
    console.log(req.requestTime,'request time')
    next()
})


app.use('/api/v1',tourRouter)
app.post('/api/v1/script/addall',toursScript.addTours)
app.delete('/api/v1/script/deleteall',toursScript.deleteAllTours)

app.all('*',(req,res,next)=>{
    next(new AppError(`This route ${req.originalUrl} not found`,404))
    })
    
// app.use((err,req,res,next)=>{
//     console.log(err.statusCode,err.message)
//     err.statusCode = err.status || 500
//     err.message = err.message || 'not found anything'
// return res.status(err.statusCode).json({message:err.message})
// })
app.use(errorMiddleware)

app.listen(3000)

