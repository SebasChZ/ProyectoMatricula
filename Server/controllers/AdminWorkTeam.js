const SingeltonDAO = require('./SingeltonDAO.js');

const addProfessor = async (req, res, next) => {

    try{    
        SingeltonDAO.addProfessorToWorkTeam(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error adding professor", error });
    }

}

const changeCoordinator = async (req, res, next) => {
    
        try{    
            SingeltonDAO.setCoordinator(req, res, next);
        } catch(error) {
            res.status(500).json({ message: "Error changing coordinator", error });
        }
    
}

exports.module = {addProfessor, changeCoordinator};
