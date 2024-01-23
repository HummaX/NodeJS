let appError = require('../utils/customError')

module.exports = aSyncError = function(fn){
return(req,res,next)=>{
    fn(req,res).catch(next)
}
}