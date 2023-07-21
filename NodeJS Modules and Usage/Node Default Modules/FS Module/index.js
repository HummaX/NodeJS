// FS modules is use to read,write,delete and uodate files in local machine
// Fs > File System in node

let fs = require('fs')

// Syncronous Data Reading, we use this on top of code so that big file execute first an then we perform xpress functions
// This will execute code line by line eg: codeBlocking
let textFile = fs.readFileSync('./fs.text','utf-8')
console.log(textFile)

//Asyncronous Data Reading
// This will kepp executing code & we cannot return data we can only use it in express function not outside
let textfile2 = fs.readFile('./fs.text','utf-8',(err,data)=>{
    console.log(data)
})

console.log('this will log first')

fs.writeFileSync('./fs.text','This is edited text') // or save this text in a vaiable
fs.writeFile('./fs.text','its aSync ', err =>{
    console.log(err)
})

// D/W async and sync is async keep executing code in background while sync blocks code and execute code line by line
// NodeJs runs on single cpu Thread in a sync all users use same thread, first user will perform task 2nd will wait for him
// while in sync multiple operation will be done on same thread without waiting last task to be completed