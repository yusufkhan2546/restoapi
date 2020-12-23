//global declaration section

const mongoose = require('mongoose');

//creating the user schema

const assignOrderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    order_id:{type:String,required:true},
    rider_id:{type:String,required:true}
});
// const varientSchema = mongoose.Schema({
   
// });
//exporting module

module.exports = mongoose.model('assignorder',assignOrderSchema);