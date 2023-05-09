const SingeltonDAO = require('../DAO/SingeltonDAO');

const enableProfessor = async (req, res, next) => {

    try{    
        SingeltonDAO.enableProfessor(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error enabling professor", error });
    }

};

const dissableProfessor = async (req, res, next) => {

    try{    
        SingeltonDAO.dissableProfessor(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error dissabling professor", error });
    }

};

module.exports = {enableProfessor,
    dissableProfessor};