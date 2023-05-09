const express = require('express');
const router = express.Router();
const adminStudentControllers = require('../../controllers/AdminStudent');

router.route('/')
    .get(adminStudentControllers.registerExcel)

//Registar un estudiante por medio de un archivo excel
//YA PROBADO
router.route('/file')
    .get(adminStudentControllers.registerExcel)

//Consultar todos los estudiantes por Campus
//YA PROBADO
router.route('/campus/:campus')
    .get(adminStudentControllers.getAllCampus)

//Consultar todos los estudiantes en orden alfabetico
//YA PROBADO
router.route('/all')
    .get(adminStudentControllers.getAllAlphabetical)

//Consultar todos los estudiantes por Id
router.route('/id/:id')
    .get(adminStudentControllers.getAllId)




module.exports = router;