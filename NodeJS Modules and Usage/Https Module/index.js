let http = require('http')
const { listenerCount } = require('process')

let server = http.createServer((req,res)=>{
    res.end('Hello From Thse Server')
})

server.listen(3000,'127.0.0.1',()=>{ // we can specify local host address too but cannot change it to other address only to home
    console.log('listening on port 3000')
})