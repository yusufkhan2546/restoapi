const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/address.controller');
router.delete('/:addressId',AddressController.delete_address)
router.post('/',AddressController.add_address);
router.get('/:user',AddressController.get_address);
router.patch('/:addressId',AddressController.update_addressbyId);
module.exports = router;