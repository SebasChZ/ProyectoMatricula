const express = require('express');
const router = express.Router();
const adminActivitiesPlan = require('../../controllers/AdminActivitiesPlan');

router.route('/')
    .get((req, res) => {
        console.log('newUser');
    })
    .post(adminActivitiesPlan.createActivitiesPlan)
router.route('/activity')
    .put(adminActivitiesPlan.addActivitytoPlan)
router.route('/nextActivity')
    .get(adminActivitiesPlan.getNextActivity)



module.exports = router;