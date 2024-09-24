const os = require("os")

const platform = os.platform()
console.log(platform)

const type = os.type()
console.log(type)

const arch = os.arch()
console.log(arch)

const uptime = os.uptime()
console.log(uptime)

const freemem = os.freemem()
console.log(freemem)

const tmpDir = os.tmpdir()
console.log(tmpDir)