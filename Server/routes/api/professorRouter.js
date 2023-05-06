const express = require('express');
const router = express.Router();
const adminProfessorControllers = require('../../controllers/AdminProfessor');
const verifyJWT = require('../../middleware/verifyJWT');
router.route('/')
    .get(adminProfessorControllers.getAllProfessor)
    .post(adminProfessorControllers.registerProfessor)
    .put(adminProfessorControllers.modifyProfessor)
    .delete(adminProfessorControllers.unsuscribreProfessor)
    

router.route('/:id')
    .get(adminProfessorControllers.getProfessorById)


module.exports = router;