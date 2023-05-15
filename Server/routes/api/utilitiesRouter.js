const express = require('express');
const router = express.Router();
const adminUtilities = require('../../controllers/AdminUtilities');


router.route('/teamName')
    .get(adminUtilities.getTeamName);

//route for branch
router.route('/branch')
    .get(adminUtilities.getBranches)

//route for count student
router.route('/countStudent')
    .get(adminUtilities.getCountStudent)

//route for get activities type
router.route('/activityType')
    .get(adminUtilities.getTypeActivity)

    
module.exports = router;