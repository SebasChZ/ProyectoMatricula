const express = require('express');
const router = express.Router();
const adminProfessorControllers = require('../../controllers/AdminProfessor');

router.route('/')
    .get( adminProfessorControllers.getAllProfessor)
    .post(adminProfessorControllers.registerProfessor)
    
    
    

router.route('/id/:id')
    .get(adminProfessorControllers.getProfessorById)

router.put('/disable/:code', adminProfessorControllers.dissableProfessor);
router.put('/enable/:code', adminProfessorControllers.enableProfessor);
router.put('/modify/:code',adminProfessorControllers.modifyProfessor)
module.exports = router;