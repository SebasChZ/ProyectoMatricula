const express = require('express');
const router = express.Router();
const adminStudentControllers = require('../../controllers/AdminStudent');

router.route('/')
    .get(adminStudentControllers.registerExcel)

router.route('/file')
    .get(adminStudentControllers.registerExcel)

router.route('/:id')
    .get(adminStudentControllers.getAllAlphabetical)



module.exports = router;