const express = require('express');
const foodItemController = require('../controllers/fooditem.controller');

const router = express.Router();


router.get('/',foodItemController.get_AllFoodTypes);
router.post('/',foodItemController.addFoodType);
router.delete('/:id',foodItemController.delete_foodType);
module.exports = router;