const SingeltonDAO = require('./SingeltonDAO.js');
const DateController = require('./DateController.js');

const createActivitiesPlan = async (req, res, next) => {
    try{    
        json = req.body;
        json.startDate = DateController.converStringToDate(json.startDate);
        json.endDate = DateController.converStringToDate(json.endDate);

        await SingeltonDAO.createActivitiesPlan(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error creating a Plan", error });
    }
    next();
}

const addActivitytoPlan = async (req, res, next) => {
    try{
     
       
        await SingeltonDAO.addActivitytoPlan(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error creating an Activity", error });
    }
    next();
}

const getActivitiesPlan = async (req, res, next) => {
    try{
        await SingeltonDAO.getActivitiesPlan(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error getting activities plan", error });
    }
    next();
}

const getActivitiesPlanFromId = async (req, res, next) => {
    try{
        await SingeltonDAO.getActivitiesPlanFromId(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error getting activities plan", error });
    }
    next();
}

const getNextActivity = async (req, res, next) => {
    try{
        await SingeltonDAO.getNextActivity(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error getting next activity", error });
    }
    next();
}


module.exports = {createActivitiesPlan, addActivitytoPlan, getNextActivity, getActivitiesPlanFromId, getActivitiesPlan};
