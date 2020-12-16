//global declaration section

const mongoose = require('mongoose');

//creating the user schema

const addressSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user:{type:String,required:true},
    fullname:{type:String,required:true},
    addressline1:{type:String,required:true},
    addressline2:{type:String,required:true},
    landmark:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    pin:{type:String,required:true},
    phone:{type:String,required:true},
});
// const varientSchema = mongoose.Schema({
   
// });
//exporting module

module.exports = mongoose.model('address',addressSchema);