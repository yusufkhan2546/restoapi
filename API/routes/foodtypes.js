const express = require('express');
const foodItemController = require('../controllers/fooditem.controller');

const router = express.Router();
router.get('/search/:foodType',foodItemController.getFoodItemsByType);
router.get('/',foodItemController.get_AllFoodTypes);


module.exports = router;