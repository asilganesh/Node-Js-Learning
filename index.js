const fs = require("fs")

const a =fs.readFileSync("./sample.txt","utf-8",(err,data)=> {

    if (err) {
        return err
    }

    console.log(data)
})

console.log(a)
console.log("I am first")