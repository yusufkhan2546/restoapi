//global declaration section

const mongoose = require('mongoose');

//creating the user schema

const cartitemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user:{type:String,required:true},
    name:{type:String,required:true},
    image:{type:String,required:true},
    size:{type:String,required:true},
    quantity:{type:String,required:true},
    price:{type:String,required:true},
});
// const varientSchema = mongoose.Schema({
   
// });
//exporting module

module.exports = mongoose.model('cartitem',cartitemSchema);