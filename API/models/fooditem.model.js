//global declaration section

const mongoose = require('mongoose');

//creating the user schema

const fooditemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    foodtype:{type:String,required:true},
    foodname:{type:String,required:true},
    images:[{type:String,required:true}],
    foodvarient:[{
        size:{type:String,required:true},
        price:{type:String,required:true},
    }]

});
// const varientSchema = mongoose.Schema({
   
// });
//exporting module

module.exports = mongoose.model('fooditem',fooditemSchema);