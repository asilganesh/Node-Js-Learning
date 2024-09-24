const http = require("http")
const fs = require("fs")
const port = 3000
const hostname = "localhost"
const home = fs.readFileSync("./index.html","utf-8")

const server = http.createServer((req,res) => {
    if(req.method==='GET'){

        res.end("it is a GET Method")
    }

    if(req.method==='POST'){

        let body = ''
        req.on('data',chunk=>{
            body+= chunk.toString()
        })
        req.on('end',()=>{
            res.end("it is post method"+body)
        })
    }
    // if(req.url==="/"){
       
    //    return  res.end(home)
    // }
    
    // if(req.url==="/about"){
    //     return res.end("<h1>About Page</h1>")
    // }

    // else{
    //     res.end("<h1>404 Page not found</h1>")
    // }
})


server.listen(port,hostname,()=>{
    console.log(`server is running on the http://${hostname}:${port}`)
})