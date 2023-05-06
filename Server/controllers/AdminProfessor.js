
const SingletonDAO = require('./SingeltonDAO.js');

const getAllProfessor = async (req, res, next) => {
    await SingletonDAO.getAllProfessor(req, res, next);
}

const modifyProfessor = async (req, res, next) => {
    const jsonProfessor = req.body;
    if(jsonProfessor.firstName == "" || jsonProfessor.Email == "" || jsonProfessor.Password == "" || jsonProfessor.phoneNumber == "" ||
        jsonProfessor.officePhoneNumber == "") {
        return res.status(400).json({ msg: 'Please enter all fields' });
    } 
    await SingletonDAO.modifyProfessorData(req, res, next);
    next();
}

const getProfessorById = async (req, res, next) => {
    await SingletonDAO.getProfessorById(req, res, next);
}

const registerProfessor = async (req, res, next) => {
    const jsonProfessor = req.body;
    if(jsonProfessor.firstName == "" || jsonProfessor.Email == "" || jsonProfessor.Password == "" || jsonProfessor.phoneNumber == "" ||
        jsonProfessor.officePhoneNumber == "") {
        return res.status(400).json({ msg: 'Please enter all fields' });
    } 
    let password = temporaryPassword();
    await SingletonDAO.registerProfessor(req, res, password, next);
    next();
}

const unsuscribreProfessor = async (req, res, next) => {
    const jsonProfessor = req.body;
    if(jsonProfessor.code == "") {
        return res.status(400).json({ msg: 'Please enter all fields' });
    } 
    
    await SingletonDAO.unsuscribeProfessor(req, res, next);
    next();
}

function temporaryPassword() {
    return Math.random().toString(36).slice(-8);
}


module.exports = {getAllProfessor, registerProfessor, getProfessorById, modifyProfessor, unsuscribreProfessor};