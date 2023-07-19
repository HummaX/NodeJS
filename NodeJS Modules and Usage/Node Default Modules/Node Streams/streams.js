let fs = require('fs')
let server = require('http').createServer()

server.on('request',(req,res)=>{
    // Solution 1
    // in this solution node first have to read whole file then it will send send whihc is not good 
    //if there are tons of requets hitting on servers, big files will eat up resourses and crash server
fs.readFile('./test-file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    res.end(data)
})
})

server.listen(3000)
