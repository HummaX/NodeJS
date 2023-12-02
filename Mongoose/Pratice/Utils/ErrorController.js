let {devError,prodError} = require('./enviromentsErros')

module.exports = function(err,req,res,next){
    // console.log(err.message,'in error middleware')

if(process.env.ENV == 'dev'){
return devError(err,res)
}else if(process.env.ENV == 'prod'){
    return prodError(err,res)
}
return res.status(err.status || 500).json({message:err.message})
}