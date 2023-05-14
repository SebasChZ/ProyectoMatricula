const express = require('express');
const router = express.Router();
const adminActivity = require('../../controllers/AdminActivity');   

router.route('/')
    .get(adminActivity.getActivities)
    .post(adminActivity.createActivity)
    .put(adminActivity.modifyActivity)

//get activity from id
router.route('/id/:id')
    .get(adminActivity.getActivityFromId)

//comment routes
router.route('/comment')
    .post(adminActivity.registerComment)
    .put(adminActivity.replyComment)

module.exports = router;