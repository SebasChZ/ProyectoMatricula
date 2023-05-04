const express = require('express');
const router = express.Router();
const adminProfessorControllers = require('../../controllers/AdminProfessor');

router.route('/')
    .get(adminProfessorControllers.getAllProfessor)
    .post(adminProfessorControllers.registerProfessor)


router.route('/cha')
    .get(adminProfessorControllers.getProfessorById)


module.exports = router;