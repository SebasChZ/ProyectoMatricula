const SingletonConnexion = require('./SingeltonConnexion.js');
const User = require('../models/User');
const Student = require('../models/Student');

const path = require("path");
const fs = require("fs");
const multer = require("multer");
const XLSX = require("xlsx");

const bcrypt = require('bcrypt');

class SingletonDAO {
    static instance;
    static count = 0;

    constructor() {
        //Database connection
        SingletonConnexion.dbConnect();
    }

    static getInstance() {
        if (this.instance) {
            console.log("Returning instance");
            return this.instance;
        }
        console.log("creating instance");
        this.instance = new SingletonDAO();

        this.count = this.count + 1;
        return this.instance;
    }

    async loginUser(req, res, next) {
        try{
            
            //check for find the user usernames in the db
            const { email, password } = req.body;
            const userFound = await User.findOne({ email: email }).exec();
            console.log(userFound);
            if (!userFound) {
                return res.status(400).json({ message: 'User has no register' });
            }
            if (userFound) {
                
                const match = await bcrypt.compare(password, userFound.password);
                
                if (match) {                    
                    res.status(200).json({ message: 'User logged perfectly ' });                 
                    
                } else {
                    res.status(400).json({ message: 'User not logged' });
                }
            }
            
        }catch{
            res.status(500).json({ message: 'Server error' });
        }
        next();
    }


    async modifyStudent(req, res, next) {
        //check for duplicate usernames in the db
        const studentToModify = await Student.findOne({ studentId: id }).exec();

        if (!studentToModify) {
            return res.status(400).json({ msg: 'studentId not found!' });
        } 
        
        try{
            if(studentToModify){
                const updateInformation = {
                    $set: {
                        firstName: newName,
                        lastname1: newLastName1,
                        lastname2: newLastName2,
                        email: newEmail,
                        cellphone: newPhone
                    },
                };

                const modification = await Student.updateOne({ studentId: id }, updateInformation);

                if (modification) {
                    res.status(200).json({ msg: 'Student modified' });
                } else{
                    res.status(400).json({ msg: 'Student not modified' });
                }
            }    
        }catch{
            res.status(500).json({ msg: 'Server error' });
        }
        next();
    }

    async getAllAlphabetical(req, res, next) {

        try {
            const students = await Student.find.sort({ firstName: 1 });
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ msg: 'Server error' });
        } finally {
            next();
        }

        next();
    }

    async getAllCampus (req, res, next) {
        
        //The request must have the parameter for the filter
        const campus = req.body;

        try {
            const students = await Student.find({ campus: campus }).sort({ studentId: 1 });
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ msg: 'Server error' });
        } finally {
            next();
        }
    }

    async getAllId(req, res, next) {

        //The request must have the parameter for the filter
        const idStart = req.body;
      
        try {
            const students = await Student.find({ studentId: new RegExp(`^${idStart}`) }).sort({ studentId: 1 });
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ msg: 'Server error' });
        } finally {
            next();
        }
    }

    async multerUpload(req, res, next) {
        const upload = multer({ storage: multer.memoryStorage() });
    }

    async registerExcel(data,req, res, next) {
        
        console.log("Entra a la funcion DAO");

        try {
            
            // const arrayStudents = []

            // arrayStudents.push(data);

            const students = data.map((student) => ({
                studentId: student.studentId,
                lastName1: student.lastName1,
                lastName2: student.lastName2,
                firstName: student.firstName,
                email: student.email,
                cellPhoneNumber: student.cellPhoneNumber,
                academicCenter: student.academicCenter,
            }));

            console.log(students);

            await Student.insertMany(students);

            res.status(200).json({ message: "Students registered successfully" });
            
        } catch (error) {
            console.error("Error registering students from Excel file:", error);
            res.status(500).json({ message: "Error registering students from Excel file" });
        } finally {
            next();
        }

    }
      

}

const singletonDAO = SingletonDAO.getInstance();

module.exports = singletonDAO ;