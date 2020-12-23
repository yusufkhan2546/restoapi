const express = require('express');
const foodItemController = require('../controllers/fooditem.controller');
const router = express.Router();

router.get('/',foodItemController.get_fooditems);

router.get('/search/:foodname',foodItemController.search_foodItem);


module.exports = router;