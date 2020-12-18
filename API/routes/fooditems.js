const express = require('express');
const foodItemController = require('../controllers/fooditem.controller');
const router = express.Router();

router.get('/',foodItemController.get_fooditems);
router.post('/',foodItemController.add_fooditem);
router.get('/search/:foodname',foodItemController.search_foodItem);
router.patch('/:fooditemID',(req,res,next)=>{
    res.status(200).json({
        message:'Patch Requres'
    })
});
router.delete('/:id',foodItemController.delete_fooditem);

module.exports = router;