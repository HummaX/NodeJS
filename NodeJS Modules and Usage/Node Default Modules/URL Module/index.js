let url = require('url')
let http = require('http')
let fs  = require('fs')

//:id this is called query string
// This all datat is of HTTPS Module

let server = http.createServer((req,res)=>{
    let pathName = req.url
    if(pathName === '/' || pathName === '/overview'){
        res.end('Hello From These Server')
    }else if(pathName === '/products'){
        res.end('Products')
    }else if(pathName === '/api'){
        // using dirname we can use ./dev-data too
fs.readFile(`${__dirname}/dev-data/data.json`,(err,data)=>{
    res.writeHead(200,{
        'Content-type':'application/json' // for json use application
    })
res.end(data)
})
    }else{
        res.writeHead(404, {
            'Content-type': 'text/html', // these headers means that browser is expecting html,for html use text
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
