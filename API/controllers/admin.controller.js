const Order = require('../models/order.model');
const Assignorder = require('../models/assignorder.model');
const Rider  = require('../models/rider.model');
const mongoose = require('mongoose');

exports.change_order_status = async (req,res,next) => {
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
exports.assign_order_to_rider = async (req,res,next)=>{
    const assignorder = new Assignorder({
        _id: new mongoose.Types.ObjectId(),
      rider_id:req.body.rider_id,
      order_id:req.body.order_id
    });
    
    assignorder
        .save()
        .then(result => {
             
            res.status(201).json({
                message: 'Order Assigned to Rider',
                _id: result._id,
                AddedtoCart: {
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/assignorder/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err });
        });
}
exports.create_rider_profile = async (req,res,next)=>{
    const rider = new Rider({
        _id: new mongoose.Types.ObjectId(),
      name:req.body.name,
      phone:req.body.phone,
      status:req.body.status,
      password:req.body.password

    });
    
    rider
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Rider Created',
                _id: result._id,
                AddedtoCart: {
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/riders/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err });
        });
}
exports.get_riders = async (req,res,next)=>{
    try{
      const riders = await Rider.find({status:'Free'});
          res.status(200).json(riders);
    } catch(error){
        res.status(404)
        res.send({ error: error }); 
    }
}
exports.delete_rider_profile = async (req,res,next)=>{
   const riderid = req.params.riderId;
   try{
      const response = await Rider.remove({_id:riderid});
      res.status(200).json(response);
   } catch (error){
    res.status(404)
    res.send({ error: error });
   }
}
exports.get_new_Orders = async(req,res,next)=>{
    try{
        const orders = await Order.find({status:'Placed'});
            res.status(200).json(orders);
      } catch(error){
          res.status(404)
          res.send({ error: error }); 
      }
}
exports.get_active_Orders = async(req,res,next)=>{
    try{
        const orders = await Order.find({$or:[{status:'PickedUp'},{status:'Ontheway'}]});
            res.status(200).json(orders);
      } catch(error){
          res.status(404)
          res.send({ error: error }); 
      }
}
