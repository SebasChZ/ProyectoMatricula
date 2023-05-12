const express = require('express');
const router = express.Router();
const adminActivitiesPlan = require('../../controllers/AdminActivitiesPlan');

router.route('/')
    .get((req, res) => {
        console.log('newUser');
    })
    .post(adminActivitiesPlan.createActivitiesPlan)
    .put(adminActivitiesPlan.addActivitytoPlan)

router.route('/activities')
    .get((req, res) => {
        console.log('newUser');
    })
    .post(adminActivitiesPlan.createActivity);


module.exports = router;