const express = require('express');
const router = express.Router();
const adminProfessorControllers = require('../../controllers/AdminProfessor');

router.route('/')
    .get( adminProfessorControllers.getAllProfessor)
    .post(adminProfessorControllers.registerProfessor)
    .put(adminProfessorControllers.modifyProfessor)
    
    

router.route('/id/:id')
    .get(adminProfessorControllers.getProfessorById)


module.exports = router;