const express = require("express")

const app = express()
const port = 4000

app.use((req,res,next)=>{
    const err= new Error("Something Went Wrong")
    next(err)
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("something broke")
})

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(port,()=>{
    console.log(`Server is running`)
})