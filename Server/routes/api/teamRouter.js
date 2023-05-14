const express = require('express');
const router = express.Router();
const adminTeam = require('../../controllers/AdminTeam');

router.route('/')
    .get(adminTeam.getTeams)
    .post(adminTeam.createTeam);

router.route('/id/:id')
    .get(adminTeam.getTeamFromId)

router.route('/plan')
    .put(adminTeam.addPlanToTeam)
    
router.route('/coordinator')
    .put(adminTeam.changeCoordinator)

router.route('/professor')
    .post(adminTeam.addProfessorToTeam)
    .delete(adminTeam.unsuscribreProfessor)

module.exports = router;