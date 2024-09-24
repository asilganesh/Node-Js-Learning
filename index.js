const path = require("path")

const filepath = "/users/ganesh/asil.js"
const filename = path.basename(filepath)
console.log(filename)

const dirName = path.dirname(filepath)
console.log(dirName)

const extName = path.extname(filepath)
console.log(extName)