// FS modules is use to read,write,delete and uodate files in local machine
// Fs > File System in node

let fs = require('fs')

let textFile = fs.readFileSync('./fs.text','utf-8')
console.log(textFile)

fs.writeFileSync('./fs.text','This is edited text') // or save this text in a vaiable