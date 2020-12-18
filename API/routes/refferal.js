const express = require('express');
const router = express.Router();
const userontroller = require('../controllers/user.controller');

router.get('/:referralid',userontroller.getRefferalOfUser);

module.exports = router;