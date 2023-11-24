// we have 4 theards in node and it goes upto 128
// to use only 1 thread
process.env.UV_THREADPOOL_SIZE = 1 // UV > LibUV

// To auto set Node enviroment on launch
// Make a script command
"Start:prod":"NODE_ENV=production nodemon app.js"
