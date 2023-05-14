const express = require('express');
const router = express.Router();
const adminActivity = require('../../controllers/AdminActivity');   

router.route('/')
    
    .post(adminActivity.createActivity)


module.exports = router;