const SingeltonDAO = require('./SingeltonDAO.js');
const DateController = require('./DateController.js');



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


const modifyActivity = async (req, res, next) => {
    try{
        json = req.body;
        json.dateTime = DateController.converStringToDate(json.dateTime);

        await SingeltonDAO.modifyActivity(req, res, next);
    }catch(error) {
        res.status(500).json({ message: "Error with modification", error });
    }
    next();
}

const getActivities = async (req, res, next) => {
    try{
        await SingeltonDAO.getActivities(req, res, next);
    }catch(error) {
        res.status(500).json({ message: "Error with consult", error });
    }
    next();
}

const getActivityFromId = async (req, res, next) => {
    try{
        await SingeltonDAO.getActivityFromId(req, res, next);
    }catch(error) {
        res.status(500).json({ message: "Error with consult", error });
    }
    next();
}



const registerComment = async (req, res, next) => {
    try{
        json = req.body;

        json.dateTime = DateController.converStringToDate(json.comment.dateTime);

        await SingeltonDAO.registerComment(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error comming an Activity", error });
    }
    next();
}

const replyComment = async (req, res, next) => {
    try{
        json = req.body;
        json.dateTime = DateController.converStringToDate(json.dateTime);

        await SingeltonDAO.replyComment(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Error repling the comment an Activity", error });
    }
    next();
}

const publishActivity = async (req, res, next) => {
    try{
        await SingeltonDAO.publishActivity(req, res, next);
    }catch(error) {
        res.status(500).json({ message: "Error publishing an Activity", error });
    }
}

const cancelActivity = async (req, res, next) => {
    try{
        await SingeltonDAO.cancelActivity(req, res, next);
    }catch(error) {
        res.status(500).json({ message: "Error canceling an Activity", error });
    }
}

const doneActivity = async (req, res, next) => {
    console.log("doneActivityAdmin");
    try{
        await SingeltonDAO.doneActivity(req, res, next);
    }catch(error) {
        res.status(500).json({ message: "Error completing an Activity", error });
    }
}


module.exports = {createActivity, modifyActivity, registerComment, replyComment, publishActivity, getActivities, getActivityFromId, cancelActivity, doneActivity};
