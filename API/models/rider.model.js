//global declaration section

const mongoose = require('mongoose');

//creating the user schema

const riderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true,unique:true},
    phone:{type:String,required:true},
    status:{type:String,required:true},
    password:{type:String,required:true}
});
// const varientSchema = mongoose.Schema({
   
// });
//exporting module

module.exports = mongoose.model('rider',riderSchema);