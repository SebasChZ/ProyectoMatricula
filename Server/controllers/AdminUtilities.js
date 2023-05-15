
const SingletonDAO = require('./SingeltonDAO.js');

//get the branches name
const getBranches = async (req, res, next) => {
    try{
        await SingletonDAO.getBranches(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error getting branches", error });
    }
    next();
}

//get teams Name from a branch
const getTeamName = async (req, res, next) => {
    try{
        await SingletonDAO.getTeamName(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error getting teams", error });
    }
    next();
}

//get countStudents from a team
const getCountStudent = async (req, res, next) => {
    try{
        await SingletonDAO.getCountStudent(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error getting countStudents", error });
    }
    next();
}

//get the type of activity
const getTypeActivity = async (req, res, next) => {
    try{
        await SingletonDAO.getActivityTypes(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error getting typeActivity", error });
    }
    next();
}


//translete the code or the name of the activity type
const translateActivityType = async (str)=>{
    try{
        await SingletonDAO.translateActivityType(str);
    } catch(error) {
        res.status(500).json({ message: "Error translating typeActivity", error });
    }
    next();
}




module.exports = {getBranches,getTeamName,getCountStudent, getTypeActivity, translateActivityType };