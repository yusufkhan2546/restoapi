const jwt = require('jsonwebtoken');
const key = require('../../nodemon.json');
module.exports = (req,res,next)=>{
    try{
        console.log(req.headers,'herer')
        const token = req.headers.authorization.split(" ")[1];
        const decode =  jwt.verify(token,key.env.JWT_KEY);
         req.userData = decode;
          res.status(200).json({
              message:'Auth Success'
          });
    }catch(error){
           return res.status(401).json({
               message:"Auth Fail"
           })
    }
}