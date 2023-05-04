const express = require('express');
const router = express.Router();
const path = require('path');
const adminUserControllers = require('../../controllers/AdminUser');

router.route('/')
    .get((req, res) => {
        console.log('newUser');
        
    })
    .post(adminUserControllers.loginUser);
module.exports = router;