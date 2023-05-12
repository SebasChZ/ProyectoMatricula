const SingeltonDAO = require('./SingeltonDAO.js');

const createTeam = async (req, res, next) => {
    try{    
        await SingeltonDAO.createTeam(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error creating a team", error });
    }
    next();
}

const addProfessorToTeam = async (req, res, next) => {

    try{    
        await SingeltonDAO.addProfessorToTeam(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error adding professor"+ error });
    }

}


const unsuscribreProfessor = async (req, res, next) => {
    const jsonProfessor = req.body;
    if(jsonProfessor.code == "") {
        return res.status(400).json({ msg: 'Please enter all fields' });
    } 
    
    await SingeltonDAO.unsuscribeProfessor(req, res, next);
    next();
}

const changeCoordinator = async (req, res, next) => {
    
    try{    
        await SingeltonDAO.setCoordinator(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error changing coordinator", error });
    }
    next();
}

module.exports = {addProfessorToTeam, changeCoordinator, createTeam, unsuscribreProfessor};
