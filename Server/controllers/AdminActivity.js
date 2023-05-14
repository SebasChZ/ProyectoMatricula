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




module.exports = {createActivity, modifyActivity, registerComment, replyComment, activateActivity};
