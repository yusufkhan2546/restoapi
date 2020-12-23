//global declaration section

const mongoose = require('mongoose');
const cartModel = require('../models/cartitem.model');
const addressModel = require('../models/address.model');

//creating the user schema

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user:{type:String,required:true},
    amount:{type:String,required:true},
    items:[{
        _id:{type:String,required:false},
        name:{type:String,required:true},
        image:{type:String,required:true},
        size:{type:String,required:true},
        quantity:{type:String,required:true},
        price:{type:String,required:true},
    }],
    address:{
        _id:{type:String,required:false},
        fullname:{type:String,required:true},
        addressline1:{type:String,required:true},
        addressline2:{type:String,required:true},
        landmark:{type:String,required:true},
        city:{type:String,required:true},
        state:{type:String,required:true},
        pin:{type:String,required:true},
        phone:{type:String,required:true},
    },
    status:{type:String,required:true}
});
// const varientSchema = mongoose.Schema({
   
// });
//exporting module

module.exports = mongoose.model('order',orderSchema);