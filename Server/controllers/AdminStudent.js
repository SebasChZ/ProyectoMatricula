const SingeltonDAO = require('./SingeltonDAO.js');
const fileController = require('./FileController.js');
const reader = fileController.readFile;
const XLSX = require('xlsx');
const path = require('path');


const modifyStudent = async (req, res, next) => {

    const { id, newName, newLastName1, newLastName2, newEmail, newPhone } = req.body;

    // if (!id || !name || !lastname1 || !lastname2 || !email || !cellphone) { 
    //     return res.status(400).json({ msg: 'Please enter all fields' });
    // }
        res.body = req.body;
    await SingeltonDAO.modifyStudent(req, res, next);
    next();
};

const getAllAlphabetical = async (req, res, next) => {

    try{
        await SingeltonDAO.getAllAlphabetical(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error getting all students by id", error });
    } finally {
        next();
    }
};

const getAllCampus = async (req, res, next) => {

    try{
        await SingeltonDAO.getAllCampus(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error getting all students by id", error });
    } finally {
        next();
    }
};

const getAllId = async (req, res, next) => {

    try{
        await SingeltonDAO.getAllId(req, res, next);

    } catch(error) {
        res.status(500).json({ message: "Error getting all students by id", error });
    } finally {
        next();
    }
    
};

const registerExcel = async (req, res, next) => {

    try {
        const fileName = req.body.filename;
        console.log("fileName: ", fileName);
        data = await reader(fileName);
        await SingeltonDAO.registerExcel(data,req, res, next);
        
    }catch(error)
    {
        res.status(500).json({ message: "Error registering students from Excel file", error });
    }

    
    next();
};

const generateExcel = async (req, res, next) => {
    
        try {
            
            await SingeltonDAO.generateExcel(req, res, next);
            
        }catch(error)
        {
            res.status(500).json({ message: "Error generating excel file", error });
        }
    
        
        next();
};


module.exports = {
    modifyStudent,
    getAllAlphabetical,
    getAllCampus,
    getAllId,
    registerExcel,
    generateExcel};