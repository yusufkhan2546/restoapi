//global declaration section
const User = require('../models/user.model');
const mongoose = require('mongoose');
 const bcrypt  = require('bcrypt');
const jwt      = require('jsonwebtoken');
const verify_token = require('../middleware/token-verify');
const key = require('../../nodemon.json');

//routes handler middlewares

exports.user_signUp = (req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length >= 1){
            return res.status(409).json({
                mesage:"mail exists",
                contact:'#IAm_developer'
            });
        } else {
            bcrypt.hash(req.body.password ,10 ,(err,hash) =>{
                if(err){
                    return res.status(500).json({
                        message:"Auth Fail",
                        contact:'#IAm_developer'
                    })
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        fullname:req.body.fullname,
                        phone:req.body.phone,
                        dob:req.body.dob,
                        email:req.body.email,
                        referralcode:req.body.referralcode,
                        password:hash
                    });
                    user.save()
                    .then(result=>{
                        console.log(result);
                        
                        res.status(201).json({
                            message:"User Created",
                            contact:'#IAm_developer'
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).json({
                             error: err ,
                             contact:'#IAm_developer'});
                    });
                }
                });
        }
    })



}
exports.user_login = (req,res,next)=>{
    const logdecider = req.body.email.length !== 0;
    if(logdecider){
        User.find({email:req.body.email})
        .exec()
        .then(user=>{
    
            if(user.length<1){
                return res.status(401).json({
                    message:'Auth failed but true',
                    contact:'#IAm_developer',
                 
    
                });
            } 
           bcrypt.compare(req.body.password,user[0].password,(err,result) =>{
                 if(err){
                     return res.status(401).json({
                         message:"auth fail",
                         contact:'#IAm_developer'
                     });
                 } 
                 if(result){
                const token = jwt.sign({
                      email:user[0].email,
                      userId:user[0]._id
                  },key.env.JWT_KEY,
                  {
                      expiresIn:"1h"
                  });
                  user[0].token = token;
                    return res.status(200).json({
                       
                        user:user[0],
                       
                    })
                 }
                 res.status(401).json({
                   message:"auth failed",
                   contact:'#IAm_developer'
                 });
           })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                message:'500 error',
                contact:'#IAm_developer'
            })
            
        })
    }else{
        User.find({phone:req.body.phone})
        .exec()
        .then(user=>{
    
            if(user.length<1){
                return res.status(401).json({
                    message:'Auth failed but true',
                    contact:'#IAm_developer',
                 
    
                });
            } 
           bcrypt.compare(req.body.password,user[0].password,(err,result) =>{
                 if(err){
                     return res.status(401).json({
                         message:"auth fail",
                         contact:'#IAm_developer'
                     });
                 } 
                 if(result){
                const token = jwt.sign({
                      email:user[0].email,
                      userId:user[0]._id
                  },key.env.JWT_KEY,
                  {
                      expiresIn:"1h"
                  });
                  user[0].token = token;
                    return res.status(200).json({
                       
                        user:user[0],
                       
                    })
                 }
                 res.status(401).json({
                   message:"auth failed",
                   contact:'#IAm_developer'
                 });
           })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                message:'500 error',
                contact:'#IAm_developer'
            })
            
        })
    }
   
}
exports.user_delete = (req, res, next) => {
    const id = req.params.userId
    User.remove({_id:id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            message:'500 error',
            contact:'#IAm_developer'
        })
        
    })
}
exports.get_allUsers =   (req, res, next) => {
    User
    .find()
    .exec()
    .then(docs => {
       const response = {
           count:docs.length,
           products:docs.map(doc  =>{
               return {
                    firstName:doc.firstName,
                    lastName:doc.lastName,
                   _id:doc._id,
                   request:{
                       type:'GET',
                       url:'http://localhost:3001/users/'+doc._id
                   }
               }
           })
 
       }
        res.status(200).json(response)
        
         })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            message:'500 eror',
            contact:'#IAm_developer'
        })
        
    })
 }
 exports.get_UserbyId = (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if(doc){
                res.status(200).json(doc);
                console.log('resof1');
                
            } else {
                 res.status(404).json({
                     message:'No valid Entry for id',
                     contact:'#IAm_developer'
                 })
            }
         
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err });
        });
}
exports.update_userbyId = (req, res, next) => {
    const id = req.params.userId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
       }
   User.updateOne({_id:id},{$set: updateOps })
   .exec()
   .then(result=>{
       res.status(200).json(result);
   })
   .catch(err=>{
       console.log(err);
       res.status(500).json({
           error:err
       })
   })
}
exports.verify_tokenUser = verify_token;