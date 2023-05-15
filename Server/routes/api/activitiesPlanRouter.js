const express = require('express');
const router = express.Router();
const adminActivitiesPlan = require('../../controllers/AdminActivitiesPlan');

router.route('/')
    .get(adminActivitiesPlan.getActivitiesPlan)
    .post(adminActivitiesPlan.createActivitiesPlan)

router.route('/id/:id')
    .get(adminActivitiesPlan.getActivitiesPlanFromId)

router.route('/activity')
    .put(adminActivitiesPlan.addActivitytoPlan)
    
router.route('/nextActivity')
    .get(adminActivitiesPlan.getNextActivity)


module.exports = router;