// to auto start app
"scripts":{
    "start":"nodemon index.js"
}

// incase node hsows that packe is not reconized we use this command
npx nodemon appendFile.js

npm start // to run this file

npm run 'script name' // to run custom script include RUN in npm

// To save dependency as DevDependencies
npm install {package name} --save-dev

// save dependencies as global
npm i nodemon --global

// installing packe with specific version
npm install slugify@1.0.0

// To check outdated packages
npm outdated

// version break down
version (1) for major updated .(11)=> also called mini version for new features .(1)=> patch version when dev fixes bugs

// to forefully exit in node use in jsfile (check scripting in node js file)
process.exit()

// To see path of running file
console.log(process.argv) // will return 2 arrays where node is located and second from where script is running

// Exporting in NodeJs
exports.function(){}
exports.jame = function(){}
module.exports = james
module.exports = function()

// Importing in node js
// file with many fucntions
app.use('/',auth.login) // auth is file and login is fucntion in it

// auth file
exports.login = function()