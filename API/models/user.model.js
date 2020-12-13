const mongoose = require('mongoose');
//creating the user schema
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullname:{type:String,required:true},
    phone:{type:String, unique:true,required:true},
    addresses:[{
        fullname:{type:String},
        addressline1:{type:String},
        addressline2:{type:String},
        landmark:{type:String},
        city:{type:String},
        state:{type:String},
        pincode:{type:String},
        phone:{type:String},
        default:{type:Boolean},
    }],
    gender:{type:String},
    dob:{type:Date},
    email:{type:String,
         required:true,
         unique:true,
    match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},
    password:{type:String,required:true},
    token:{type:String},
    referralcode:{type:String}
});
//exporting module
module.exports = mongoose.model('user',userSchema);