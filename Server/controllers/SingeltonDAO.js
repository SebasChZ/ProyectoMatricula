const SingletonConnexion = require('./SingeltonConnexion.js');
const User = require('../models/User');
const bcrypt = require('bcrypt');

class SingletonDAO {
    static instance;
    static count = 0;

    constructor() {
        //Database connection
        SingletonConnexion.dbConnect();
    }

    static getInstance() {
        if (this.instance) {
            console.log("Returning instance");
            return this.instance;
        }
        console.log("creating instance");
        this.instance = new SingletonDAO();

        this.count = this.count + 1;
        return this.instance;
    }

    async loginUser(req, res, next) {
        try{
            
            //check for find the user usernames in the db
            const { email, password } = req.body;
            const userFound = await User.findOne({ email: email }).exec();
            console.log(userFound);
            if (!userFound) {
                return res.status(400).json({ message: 'User has no register' });
            }
            if (userFound) {
                
                const match = await bcrypt.compare(password, userFound.password);
                
                if (match) {                    
                    res.status(200).json({ message: 'User logged perfectly ' });                 
                    
                } else {
                    res.status(400).json({ message: 'User not logged' });
                }
            }
            
        }catch{
            res.status(500).json({ message: 'Server error' });
        }
        next();
    }
}

const singletonDAO = SingletonDAO.getInstance();

module.exports = singletonDAO;