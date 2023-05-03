const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController.js');

router.route('/')
    .get(employeeController.getEmployees)


router.route('/:id')
    .get(employeeController.getEmployeeById)


module.exports = router;