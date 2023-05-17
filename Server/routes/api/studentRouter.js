const express = require('express');
const router = express.Router();
const adminStudentControllers = require('../../controllers/AdminStudent');

const Student = require('../../models/Student');

const multer = require('multer');
const upload = multer();

router.post('/file', upload.single('file'), async (req, res) => {
        
        console.log("Registering students from Excel file")

        try {

            const jsonData = JSON.parse(req.body.file);

            console.log(jsonData);

            // const file = req.file;

            // // const arrayStudents = []

            // // arrayStudents.push(data);

            // const students = file.map((student) => ({
            //     studentId: student.studentId,
            //     lastName1: student.lastName1,
            //     lastName2: student.lastName2,
            //     firstName: student.firstName,
            //     email: student.email,
            //     cellPhoneNumber: student.cellPhoneNumber,
            //     academicCenter: student.academicCenter,
            // }));

            // Remove the header row from the jsonData array
            const dataRows = jsonData.slice(1);

            // Map each data row to a student object
            const students = dataRows.map((row) => ({
            studentId: row[0],
            firstName: row[1],
            lastName1: row[2],
            lastName2: row[3],
            email: row[4],
            cellPhoneNumber: row[5],
            academicCenter: row[6],
            }));


            Student.insertMany(students);
            res.status(200).json({ message: "Students registered successfully" });
            console.log("Students registered successfully");
        } catch (error) {
            console.error("Error registering students from Excel file:", error);
            res.status(500).json({ message: "Error registering students from Excel file" });
        }

    });
    // adminStudentControllers.registerExcel
// //Registar un estudiante por medio de un archivo excel
// //YA PROBADO
// router.route('/file')
//     .post(adminStudentControllers.registerExcel)

//Consultar todos los estudiantes por Campus
//YA PROBADO
router.route('/campus/:campus')
    .get(adminStudentControllers.getAllCampus)

//Consultar todos los estudiantes en orden alfabetico
//YA PROBADO
router.route('/all')
    .get(adminStudentControllers.getAllAlphabetical)

//Consultar todos los estudiantes por Id
//YA PROBADO
router.route('/id/:id')
    .get(adminStudentControllers.getAllId)

router.route('/excel')
    .post(adminStudentControllers.generateExcel)

router.route('/modify/:id')
    .put(adminStudentControllers.modifyStudent)

module.exports = router;