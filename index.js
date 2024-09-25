const express = require("express")
const path = require("path")
const body = require("body-parser")
const app = express()

app.use(body.urlencoded({extended: false}))
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+"/index.html"))
})

app.post('/login',(req,res) => {

    console.log(req.body)
    res.send("Done")
})
const port = 4000
app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`)
})