const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    
    if(!req.headers.authorization){
         res.json('please login')
        
    }
    const checkToken = req.headers.authorization.split(' ')[1]
   
        jwt.verify(checkToken,process.env.SECRET,(err,result)=>{
        if(err) throw err
        
        
        
    })
    next();
};