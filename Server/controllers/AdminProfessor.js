
const SingletonDAO = require('./SingeltonDAO.js');

const getAllProfessor = async (req, res, next) => {
    await SingletonDAO.getAllProfessor(req, res, next);
}

const modifyProfessor = async (req, res, next) => {
    await SingletonDAO.modifyProfessorData(req, res, next);
    next();
}

const getProfessorById = async (req, res, next) => {
    console.log("getProfessorById admin");
    await SingletonDAO.getProfessorById(req, res, next);
}

const registerProfessor = async (req, res, next) => {
    const jsonProfessor = req.body;

    console.log(jsonProfessor);

    if(jsonProfessor.firstName == "" || jsonProfessor.Email == "" || jsonProfessor.Password == "" || jsonProfessor.phoneNumber == "" ||
        jsonProfessor.officePhoneNumber == "") {
        return res.status(400).json({ msg: 'Please enter all fields' });
    } 
    let password = temporaryPassword();
    await SingletonDAO.registerProfessor(req, res, password, next);
    next();
}


function temporaryPassword() {
    return Math.random().toString(36).slice(-8);
}

const dissableProfessor = async (req, res, next) => {

    await SingletonDAO.dissableProfessor(req, res, next);

}

const enableProfessor = async (req, res, next) => {


    await SingletonDAO.enableProfessor(req, res, next);
}


module.exports = {getAllProfessor, registerProfessor, getProfessorById, modifyProfessor, dissableProfessor,enableProfessor};