const Order = require('../models/order.model');
const mongoose = require('mongoose');
const Rider = require('../models/rider.model');
const Assignorder = require('../models/assignorder.model');
exports.delivery_status = async (req,res,next) => {
    const status = req.body.status;
    const id = req.params.orderId;
    const riderid = req.params.riderid;
try {
      const order = await Order.findByIdAndUpdate(id,{status:status});
    const riderstatus = await Rider.findByIdAndUpdate(riderid,{status:'Free'});
      res.status(200).json({
          message:"Delivery Final attempt and Rider Status Update"
      });
    
} catch (error) {
    res.status(404)
    res.send({ error: error });
}
}
exports.get_assignedOrders = async (req,res,next)=>{
    const riderid = req.params.riderid;
    try{
        const assignedOrdes = await Assignorder.find({rider_id:riderid});
        // if(assignedOrdes.length>0){
        //   this.assignedOrdes.forEach(element => {
        //     const OrdersForDelivery = Order.find({_id:assignedOrdes.order_id});
        //   });
        // }
        res.status(200).json(assignedOrdes);

    } catch(error){
        res.status(404)
        res.send({ error: error });
    }
}
