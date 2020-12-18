const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card.controller');
router.delete('/:Id',cardController.delete_card)
router.post('/',cardController.add_card);
router.get('/:user',cardController.get_card);
router.patch('/:Id',cardController.update_cardbyId);
module.exports = router;