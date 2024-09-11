module.exports =(req,res,next)=>{
  if(!req.headers["gold-box"]){
    res.json({error:true})
  }
  next(); 
}