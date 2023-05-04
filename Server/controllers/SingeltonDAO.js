const SingletonConnexion = require('./SingeltonConnexion.js');
const User = require('../models/User');
const Professor = require('../models/Professor');
const bcrypt = require('bcrypt');
const erorrHandler = require('../middleware/erorrHandler');
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
    //-------------------------------------------------------------------------------------
    //                      User Admin Functions
    //-------------------------------------------------------------------------------------
    async registerUser(req, res, next) {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }
        //check for duplicate usernames in the db
        const duplicate = await User.findOne({ email: email }).exec();

        if (duplicate) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        try {
            //encrypt password
            const hashedPassword = await bcrypt.hash(password, 10);

            //create and store the new user
            const newUserResult = await User.create({ "email": email, "password": hashedPassword });
            res.status(200).json({ msg: 'User created' });
        } catch {
            res.status(500).json({ msg: 'Server error' });
        }
        next();
    }

    async registerUserFrom(email, password) {
        
        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }
        //check for duplicate usernames in the db
        const duplicate = await User.findOne({ email: email }).exec();

        if (duplicate) {
            return false;
        }

        try {
            //encrypt password
            const hashedPassword = await bcrypt.hash(password, 10);

            //create and store the new user
            const newUserResult = await User.create({ "email": email, "password": hashedPassword });
            return true;
        } catch {
            return false;
        }
        next();
    }


    async loginUser(req, res, next) {
        try {

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

        } catch {
            res.status(500).json({ message: 'Server error' });
        }
        next();
    }

    //-------------------------------------------------------------------------------------
    //                      Professor Admin Functions
    //-------------------------------------------------------------------------------------
    async registerProfessor(req, res, password, next) {
        try {

            //check for find the user usernames in the db
            const jsonProfessor = req.body;
            jsonProfessor["count"] = 3;
            const userFound = await User.findOne({ email: jsonProfessor.email }).exec();

            if (userFound) {
                return res.status(400).json({ message: 'Already exits a professor with this email' });
            } else {
                //create and store the new user
                jsonProfessor["count"] = await SingletonDAO.getInstance().getNextProffesorCode(jsonProfessor.branch);
                jsonProfessor["code"] = jsonProfessor.branch +"-"+ jsonProfessor.count;

                await Professor.create({
                    "code": jsonProfessor.code, "firstName": jsonProfessor.firstName, "lastName1": jsonProfessor.lastName1, "lastName2": jsonProfessor.lastName2,
                    "email": jsonProfessor.email, "officePhoneNumber": jsonProfessor.officePhoneNumber, "phoneNumber": jsonProfessor.phoneNumber, 
                    "photo": jsonProfessor.photo, "branch": jsonProfessor.branch, "count": jsonProfessor.count
                });
                
                let UserValue = await SingletonDAO.getInstance().registerUserFrom(jsonProfessor.email, password);
                if (UserValue){                    
                    res.status(200).json({ state: true, message: 'The professor has been created perfectly' });
                }else{
                    
                    res.status(400).json({ state: false, message: 'The professor has not been created' });
                }
            }

        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }

    async getNextProffesorCode(branchString) {
        try {
            const professorFound = await Professor.find({ branch: branchString }).sort({ count: -1 }).exec();
            const jsonFound = professorFound[0];
            if (jsonFound == undefined) {
                return 1;
            }
            return jsonFound.count + 1;
        } catch (e) {
            throw e;
        }
    };

    
}

const singletonDAO = SingletonDAO.getInstance();

module.exports = singletonDAO;