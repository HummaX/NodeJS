let express = require('express')
let app = express()

app.post('/',(req,res)=>{
    res.status(404).send('james')
})

app.listen(3000)