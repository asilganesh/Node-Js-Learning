const fs = require("fs")

// Reading file
const a = fs.readFile("./sample.txt","utf-8",(err,data)=>{
    if(err){
        return err
    }

    console.log("File readed successfully" + data)
})

// Writing a file 
const data = "Writing to the file"

fs.writeFile("./sample.txt",data,(err,data)=>{
    if(err){
        return err
    }
    console.log("File Writted Successfully")
})

// Adding new data to the file

const data = "Appending the a new data to the file"
fs.appendFile("./sample.txt",data,(err,data)=>{
    if(err){
        return err
    }

    console.log("Appending data successfully")
})

// Renaming a file name

fs.rename("sample.txt","file.txt",(err,data)=>{
    if(err){
        return err
    }

    console.log("File name Reanamed")
})

//Deleting the file

fs.unlink("index.js",(err,data)=>{
    if(err){
        return err
    }
    console.log("File deleted")
})