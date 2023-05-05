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
    await SingeltonDAO.modifyStudent(req, res, next);
    next();
};

const getAllAlphabetical = async (req, res, next) => {

    await SingeltonDAO.getAllAlphabetical(req, res, next);
    next();
};

const getAllCampus = async (req, res, next) => {

    await SingeltonDAO.getAllCampus(req, res, next);
    next();
};

const getAllId = async (req, res, next) => {

    await SingeltonDAO.getAllId(req, res, next);
    next();
};

const registerExcel = async (req, res, next) => {

    try {
        data = reader();
        await SingeltonDAO.registerExcel(data,req, res, next);
    }catch(error)
    {
        console.log("Error:", error);
    }

    
    next();
};

module.exports = {
    modifyStudent,
    getAllAlphabetical,
    getAllCampus,
    getAllId,
    registerExcel};