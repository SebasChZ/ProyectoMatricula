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

const createActivity = async (req, res, next) => {
    try{
        json = req.body;
        json.dateTime = DateController.converStringToDate(json.dateTime);

        await SingeltonDAO.registerActivity(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error creating an Activity", error });
    }
    next();
}

module.exports = {createActivitiesPlan, createActivity, addActivitytoPlan};
