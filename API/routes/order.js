const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order.controller');
const CartController = require('../controllers/cart.controller');
router.get('/:user',OrderController.get_orders);
router.post('/',OrderController.add_order,CartController.delete_cartItems);
module.exports = router;