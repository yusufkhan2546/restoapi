const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const foodItemController = require('../controllers/fooditem.controller');


// routes of Riders
router.get('/riders',adminController.get_riders);
router.post('/riders',adminController.create_rider_profile);
router.delete('/riders/:riderId',adminController.delete_rider_profile);

//routes of orders
router.patch('/changestatus/:orderId',adminController.change_order_status);
router.get('/newOrders',adminController.get_new_Orders);
router.get('/activeOrders',adminController.get_active_Orders);
router.post('/assignorder',adminController.assign_order_to_rider);

//routes of fooditems
router.post('/',foodItemController.add_fooditem);
router.patch('fooditem/:fooditemId',foodItemController.update_fooditem);
router.patch('foodtype/:foodtypeId',foodItemController.update_foodtype);
router.delete('/:id',foodItemController.delete_fooditem);
router.post('/',foodItemController.addFoodType);
router.delete('/:id',foodItemController.delete_foodType);

module.exports = router;