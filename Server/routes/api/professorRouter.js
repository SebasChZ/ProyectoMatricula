const express = require('express');
const router = express.Router();
const adminProfessorControllers = require('../../controllers/AdminProfessor');

router.route('/')
    .get(adminProfessorControllers.getAllProfessor)


router.route('/:id')
    .get(adminProfessorControllers.getProfessorById)


module.exports = router;