const express = require('express');
const router = express.Router();
const riderController = require('../controllers/rider.controller');

router.get('/assignedorders/:riderid',riderController.get_assignedOrders);
router.patch('changestatus/:orderId',riderController.delivery_status);


module.exports = router;