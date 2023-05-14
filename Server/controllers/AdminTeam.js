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

const getTeams = async (req, res, next) => {
    try{    
        await SingeltonDAO.getTeams(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error getting teams", error });
    }
    next();
}

const getTeamFromId = async (req, res, next) => {
    try{    
        console.log("getTeamFromId");
        await SingeltonDAO.getTeamFromId(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error getting team", error });
    }
    next();
}

const addPlanToTeam = async (req, res, next) => {
    try{
        await SingeltonDAO.addPlanToTeam(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error adding plan to team", error });
    }
    next();
}



module.exports = {addProfessorToTeam, changeCoordinator, createTeam, unsuscribreProfessor, getTeams, addPlanToTeam, getTeamFromId};
