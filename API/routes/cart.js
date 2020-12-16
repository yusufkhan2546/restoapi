const express = require('express');
const cartItemController = require('../controllers/cart.controller');
const router = express.Router();

router.get('/:user',cartItemController.get_cartItems);

router.post('/',cartItemController.add_cart_item);

router.delete('/:id',cartItemController.delete_cartItem);
module.exports = router;