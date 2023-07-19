let http = require('http')

let server = http.createServer((req,res)=>{
    res.end('Hello From Thse Server')
    res.writeHead(404)// to send status code in https
})

server.listen(3000,'127.0.0.1',()=>{ // we can specify local host address too but cannot change it to other address only to home
    console.log('listening on port 3000')
})

//Second method to create server is
let server = require('http').createServer()

// Commands
res.end // To display text on target page/url
res.writeHead // to send status code and send headers