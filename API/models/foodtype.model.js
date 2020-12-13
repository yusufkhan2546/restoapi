//global declaration section

const mongoose = require('mongoose');

//creating the user schema

const foodtypeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    imageURL: { type:String,required:true}
});

//exporting module

module.exports = mongoose.model('foodtype',foodtypeSchema);