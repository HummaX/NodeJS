// FS modules is use to read,write,delete and uodate files in local machine

let fs = require('fs')

let textFile = fs.readFileSync('./fs.text','utf-8')
console.log(textFile)

fs.writeFileSync('./fs.text','This is edited text') // or save this text in a vaiable