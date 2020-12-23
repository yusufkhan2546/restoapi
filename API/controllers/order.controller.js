const Order = require('../models/order.model');
const mongoose = require('mongoose');
const  cartItem = require('../models/cartitem.model');
exports.add_order = (req,res,next) =>{
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        user:req.body.user,
        amount:req.body.amount,
        items:req.body.items,
        address:req.body.address,
        status:'Placed'
    });
    
    order
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Order Success',
                _id: result._id,
                OrderProcessed: {
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/cart/order/' + result._id
                    }
                }
            });




            
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err });
        });
        // order.items.forEach(element => {
        //     cartItem.remove({ _id: element._id })
        // .exec()
        // .then(result => {
            
        // })
        // .catch(err => {
        //     console.log(err);
        //     res.status(500).json({
        //         message: '500 error',
        //         contact: '#IAm_developer'
        //     })

        // });
        // });
        next();
    
}
exports.get_orders = async (req,res,next) =>{
    const user = req.params.user;
    try {
        const posts = await Order.find({user:user});
        res.status(200).json(posts);
    }
    catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" });
    }  
}
exports.order_status = async (req,res,next) => {
    const status = req.body.status;
    const id = req.params.orderId;
try {
      const order = await Order.findByIdAndUpdate(id,{status:status});
      res.status(200).json({
          message:"Order Updated"
      });
    
} catch (error) {
    res.status(404)
    res.send({ error: error });
}
}