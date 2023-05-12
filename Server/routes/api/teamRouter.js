const express = require('express');
const router = express.Router();
const adminTeam = require('../../controllers/AdminTeam');

router.route('/')
    .get((req, res) => {
        console.log('newUser');
    })
    .post(adminTeam.createTeam);

router.route('/coordinator')
    .put(adminTeam.changeCoordinator)

router.route('/professor')
    .post(adminTeam.addProfessorToTeam)
    .delete(adminTeam.unsuscribreProfessor)

module.exports = router;