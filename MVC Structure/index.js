// First we export our function models

const { Router } = require("express")

// our Model/Schema in Modles Folder
let model = ()=>{}

exports.model = model 

// Now Controllers
exports.controller = (req,res)=>{}

// Now in Index.js or app.js
Router.route('/api/v1').post('function name').get('function name')
 // Or
 router.post('/api/v1/tours','function name')

 exports.module = Router

 // Now in index.js
app.use('/','nowthat RouterFunction give that file name here ')
