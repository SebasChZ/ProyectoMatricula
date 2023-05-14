const express = require('express');
const router = express.Router();
const adminUserControllers = require('../../controllers/AdminUser');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/auth')
    .post(adminUserControllers.loginUser);
router.route('/register')
    .post(adminUserControllers.registerUser)

router.route('/updatePassword')
    .post(adminUserControllers.updatePassword);
    
module.exports = router;