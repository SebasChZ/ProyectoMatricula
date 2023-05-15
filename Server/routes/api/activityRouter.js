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

//publish activity
router.route('/publish')
    .put(adminActivity.publishActivity)


//cancel activity
router.route('/cancel')
    .put(adminActivity.cancelActivity)



//comment routes
router.route('/comment')
    .post(adminActivity.registerComment)
    .put(adminActivity.replyComment)

//done activity
router.route('/done')
    .put(adminActivity.doneActivity)

module.exports = router;