const Foodtype = require('../models/foodtype.model');
const mongoose = require('mongoose');
const FoodItem = require('../models/fooditem.model');


//routes handler middlewares
exports.addFoodType = (req, res, next) => {
    const foodtype = new Foodtype({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        imageURL: req.body.imageURL
    });
    foodtype
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Food Type Created Success',
                _id: result._id,
                createdFoodType: {
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/foodtype/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err });
        });
}
exports.get_AllFoodTypes = async (req, res, next) => {
    try {
        const posts = await Foodtype.find();
        res.status(200).json(posts);
    }
    catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
}
exports.delete_foodType = (req, res, next) => {
    const id = req.params.id
    Foodtype.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: '500 error',
                contact: '#IAm_developer'
            })

        });
}
exports.add_fooditem = async (req,res,next)=>{

    try{
        const fooditem = new FoodItem({
            _id: new mongoose.Types.ObjectId(),
            foodtype:req.body.foodtype,
            foodname:req.body.foodname,
            images:req.body.images,
            foodvarient:req.body.foodvarient
        });

        const response = await fooditem.save();
        res.send(201).json(response);
    }
    catch(error){
        res.status(404);
        res.send({ error: error });
    }
    
}
exports.get_fooditems = async (req, res, next) => {
    try {
        const posts = await FoodItem.find();
        res.status(200).json(posts);
    }
    catch {
        res.status(404)
        res.send({ error: "Item doesn't exist!" })
    }
}
exports.delete_fooditem = (req, res, next) => {
    const id = req.params.id
    FoodItem.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: '500 error',
                contact: '#IAm_developer'
            })

        });
}
exports.search_foodItem = async (req,res,next) =>{
    try{
        const items = await FoodItem.find({
            foodname:{
                $regex:req.params.foodname
            }
        });
        res.status(200).json(items);
    } catch(error){
        res.status(404)
        res.send({ error: error })
    }
   
}
exports.getFoodItemsByType = async (req,res,next) =>{
    try{
        const items = await FoodItem.find({
            foodtype:{
                $regex:req.params.foodType
            }
        });
        res.status(200).json(items);
    } catch(error){
        res.status(404)
        res.send({ error: error })
    }
}
exports.update_fooditem = (req, res, next) => {
    const id = req.params.fooditemId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
       }
    FoodItem.updateOne({_id:id},{$set: updateOps })
   .exec()
   .then(result=>{
       res.status(200).json(result);
   })
   .catch(err=>{
       console.log(err);
       res.status(500).json({
           error:err
       })
   })
}
exports.update_foodtype = (req, res, next) => {
    const id = req.params.foodtypeId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
       }
    Foodtype.updateOne({_id:id},{$set: updateOps })
   .exec()
   .then(result=>{
       res.status(200).json(result);
   })
   .catch(err=>{
       console.log(err);
       res.status(500).json({
           error:err
       })
   })
}
