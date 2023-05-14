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

const registerComment = async (req, res, next) => {
    try{
        json = req.body;
        json.dateTime = DateController.converStringToDate(json.dateTime);

        await SingeltonDAO.registerComment(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error creating an Activity", error });
    }
    next();
}

const replyComment = async (req, res, next) => {
    try{
        json = req.body;
        json.dateTime = DateController.converStringToDate(json.dateTime);

        await SingeltonDAO.replyComment(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error creating an Activity", error });
    }
    next();
}

const activateActivity = async (req, res, next) => {
    try{
        await SingeltonDAO.activateActivity(req, res, next);
    }catch(error) {
        res.status(500).json({ message: "Error creating an Activity", error });
    }
}

const modifyActivity = async (req, res, next) => {
    try{
        json = req.body;
        json.dateTime = DateController.converStringToDate(json.dateTime);

        await SingeltonDAO.modifyActivity(req, res, next);
    }catch(error) {
        res.status(500).json({ message: "Error with modification", error });
    }
}

const nextActivity = async (req, res, next) => {

    try{
        await SingeltonDAO.nextActivity(req, res, next);
    }catch(error) {
        res.status(500).json({ message: "Error with modification", error });
    }

}

module.exports = {createActivitiesPlan, createActivity, addActivitytoPlan, registerComment, replyComment, activateActivity,modifyActivity,nextActivity};
