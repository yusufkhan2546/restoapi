const Card = require('../models/card.model');
const mongoose = require('mongoose');
exports.add_card = (req,res,next)=> {
    const card = new Card({
        _id: new mongoose.Types.ObjectId(),
        user:req.body.user,
        fullname:req.body.fullname,
       cardnumber:req.body.cardnumber,
       expirymonth:req.body.expirymonth,
       expiryyear:req.body.expiryyear,
       cvv:req.body.cvv,
       nickname:req.body.nickname
    });
    
    card
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Added Card',
                _id: result._id,
                AddedCard: {
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/card/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err });
        });
}
exports.get_card = async (req,res,next)=>{
    const user = req.params.user;
    try {
        const posts = await Card.find({user:user});
        res.status(200).json(posts);
    }
    catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" });
    }
}
exports.delete_card = (req,res,next)=>{
    const id = req.params.Id
    Card.remove({_id:id})
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
exports.update_cardbyId = (req, res, next) => {
    const id = req.params.Id;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
       }
   Card.updateOne({_id:id},{$set: updateOps })
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