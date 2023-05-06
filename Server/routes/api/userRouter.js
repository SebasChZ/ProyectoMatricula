const express = require('express');
const router = express.Router();
const adminUserControllers = require('../../controllers/AdminUser');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get(adminUserControllers.registerUser)
    .post(adminUserControllers.loginUser);
module.exports = router;