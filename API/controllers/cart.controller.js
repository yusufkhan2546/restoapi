const  cartItem = require('../models/cartitem.model');
const mongoose = require('mongoose');


exports.add_cart_item =async (req,res,next)=>{
    try{
        const cartitem = new cartItem({
            _id: new mongoose.Types.ObjectId(),
            quantity:req.body.quantity,
            name:req.body.name,
            image:req.body.image,
            size:req.body.size,
            price:req.body.price,
        });

        const response = await cartitem.save();
        res.send(201).json(response);
    }
    catch(error){
        res.status(404);
        res.send({ error: error });
    }
}
exports.get_cartItems = async (req, res, next) => {
    try {
        const posts = await cartItem.find();
        res.status(200).json(posts);
    }
    catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
}
exports.delete_cartItem = (req, res, next) => {
    const id = req.params.id
    cartItem.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: '500 error',
                contact: '#IAm_developer'
            })

        });
}