const Address = require('../models/address.model');
const mongoose = require('mongoose');
exports.add_address = (req,res,next)=> {
    const address = new Address({
        _id: new mongoose.Types.ObjectId(),
        user:req.body.user,
        fullname:req.body.fullname,
        addressline1:req.body.addressline1,
        addressline2:req.body.addressline2,
        landmark:req.body.landmark,
        city:req.body.city,
        state:req.body.state,
        pin:req.body.pin,
        phone:req.body.phone
    });
    
    address
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Added to Cart',
                _id: result._id,
                AddedtoCart: {
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/address/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err });
        });
}
exports.get_address = async (req,res,next)=>{
    const user = req.params.user;
    try {
        const posts = await Address.find({user:user});
        res.status(200).json(posts);
    }
    catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" });
    }
}
exports.delete_address = (req,res,next)=>{
    const id = req.params.addressId
    Address.remove({_id:id})
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
exports.update_addressbyId = (req, res, next) => {
    const id = req.params.addressId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
       }
   Address.updateOne({_id:id},{$set: updateOps })
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