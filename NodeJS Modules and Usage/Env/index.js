// we use env to store some variables in node enviroment variable
// data is safe in evn we can store our sensitive data in env

// to acces node env
//we need to run node js, these variable will get saved in node enviroment variables
NODE_ENV=production x=23 node app.js

// now we need to push our details in env so we add node module which is dotenv
let dotenv = require('dotenv')
dotenv.configure({path:}) // always keep it above app = express(), otherwise it will not run as app.(method) will only runs its methods

// Now create a new .env file
USER=hummas
PASSWORD=125165
NODE_ENV=development

// if we want to run server in production simply add this in script
"start:prod":"NODE_ENV=production nodemonapp.js"
npm start:prod

// To Access env variable
process.env.variablename