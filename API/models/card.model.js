//global declaration section

const mongoose = require('mongoose');

//creating the user schema

const cardSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user:{type:String,required:true},
    fullname:{type:String,required:true},
    cardnumber:{type:String,required:true},
    expirymonth:{type:String,required:true},
    expiryyear:{type:String,required:true},
    cvv:{type:String,required:true},
    nickname:{type:String,required:true},

});
// const varientSchema = mongoose.Schema({
   
// });
//exporting module

module.exports = mongoose.model('card',cardSchema);