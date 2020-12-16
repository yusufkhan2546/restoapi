const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/user.controller');

//route paths to controllers
router.post('/login',UsersController.user_login);
router.post('/signup',UsersController.user_signUp,UsersController.mail);

router.get('/',UsersController.get_allUsers);

router.get('/:userId',UsersController.get_UserbyId);
router.patch('/:userId',UsersController.update_userbyId);
router.delete('/:userId',UsersController.user_delete);
router.post('/verify',UsersController.verify_tokenUser); 
router.post('/testmail',UsersController.mail);
router.post('/testtemplate',UsersController.rendertemplate);



//exporting modules
module.exports = router;