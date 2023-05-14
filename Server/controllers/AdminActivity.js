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



module.exports = {createActivity};
