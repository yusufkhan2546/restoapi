const express = require('express');
const foodItemController = require('../controllers/fooditem.controller');
const router = express.Router();

router.get('/',foodItemController.get_fooditems);
router.post('/',foodItemController.add_fooditem);
router.get('/:fooditemID',(req,res,next)=>{
    const id = req.params.fooditemID
    if(id==='special'){
        res.status(200).json({
            message:'Food Item with Special ID'
        });  
    } else {
        res.status(200).json({
            message:'Food Item with  ID'
        });
    }
});
router.patch('/:fooditemID',(req,res,next)=>{
    res.status(200).json({
        message:'Patch Requres'
    })
});
router.delete('/:id',foodItemController.delete_fooditem);
module.exports = router;