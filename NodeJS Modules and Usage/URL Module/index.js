let url = require('url')
let http = require('http')

// This all datat is of HTTPS Module

let server = http.createServer((req,res)=>{
    let pathName = req.url
    if(pathName === '/' || pathName === '/overview'){
        res.end('Hello From These Server')
    }else if(pathName === '/products'){
        res.end('Products')
    }else{
        res.writeHead(404, {
            'Content-type': 'text/html', // these headers means that browser is expecting html
            'my-own-header':'this is my header'
        })
        res.end('<h1>Page Not Found</h1>')
    }
})

server.listen(3000,'127.0.0.1',()=>{ // we can specify local host address too but cannot change it to other address only to home
    console.log('listening on port 3000')
})

// Commands
// req.url // to see which url we accessed
