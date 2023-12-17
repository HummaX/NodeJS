exports.devError = function(err,res){
    return res.status(err.status || 500).json({message:err.message,stack:err.stack,error:err,status:err.status})
}

exports.prodError = function (err,res){
   // operational, Trusted Error: send message to client
   if(err.isOperational){
res.status(err.status).json({message:err.message})
   } // Programming or other unKnown Error: dont leak error Details
    return res.status(err.status || 500).json({message:'something went wrong'})
    }