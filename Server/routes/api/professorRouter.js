const express = require('express');
const router = express.Router();
const adminProfessorControllers = require('../../controllers/AdminProfessor');

router.route('/')
    .get(adminProfessorControllers.getAllProfessor)
    .post(adminProfessorControllers.registerProfessor)
    .put(adminProfessorControllers.modifyProfessor)
    .delete(adminProfessorControllers.unsuscribreProfessor)
    

router.route('/status')
    .put(adminProfessorControllers.getProfessorById)


module.exports = router;