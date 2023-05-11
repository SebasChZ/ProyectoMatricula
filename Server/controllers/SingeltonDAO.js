const SingletonConnexion = require('./SingeltonConnexion.js');

//Models
const User = require('../models/User');
const Student = require('../models/Student');
const Professor = require('../models/Professor');
const Assistant = require('../models/Assistant');
const WorkTeam = require('../models/WorkTeam');

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
            if (!userFound) {
                res.status(400).json({status:false, message: 'User has no register' });
                return false;
            }
            if (userFound) {

                const match = await bcrypt.compare(password, userFound.password);

                if (match) {
                    res.status(200).json({ status:true, message: 'User logged perfectly ' });
                    return true;

                } else {
                    res.status(400).json({ status:false, message: 'User not logged' });
                    return false;
                }
            }

        } catch {
            res.status(500).json({status:false, message: 'Server error' });
            return false;
        }
    }
    //-------------------------------------------------------------------------------------
    //                      Student Admin Functions
    //-------------------------------------------------------------------------------------
    async modifyStudent(req, res, next) {
        //check for duplicate usernames in the db

        const { id, newName, newLastName1, newLastName2, newEmail, newPhone } = req.body

        const studentToModify = await Student.findOne({ studentId: id });

        if (!studentToModify) {
            return res.status(400).json({ msg: 'studentId not found!' });
        } 
        
        try{
            if(studentToModify){
                const updateInformation = {
                    $set: {
                        firstName: newName,
                        lastname1: newLastName1,
                        lastname2: newLastName2,
                        email: newEmail,
                        cellphone: newPhone
                    },
                };

                const modification = await Student.updateOne({ studentId: id }, updateInformation);

                if (modification) {
                    res.status(200).json({ msg: 'Student modified' });
                } else{
                    res.status(400).json({ msg: 'Student not modified' });
                }
            }    
        }catch{
            res.status(500).json({ msg: 'Server error' });
        }
        next();
    }

    async getAllAlphabetical(req, res, next) {

        try {
            const students = await Student.find().sort({ firstName: 1 });
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ msg: 'Error getting all students on alphabetical order' });
        } finally {
            next();
        }

        next();
    }

    async getAllCampus (req, res, next) {
        
        //The request must have the parameter for the filter
        const campusActual = req.params.campus;

        try {
            const students = await Student.find({ academicCenter: campusActual }).sort({ studentId: 1 });
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ msg: 'Error getting all students by campus',error });
        } finally {
            next();
        }
    }

    async getAllId(req, res, next) {

        //The request must have the parameter for the filter
        const idStart = req.params.id;
      
        try {
            const students = await Student.find({ studentId: new RegExp(`^${idStart}`) }).sort({ studentId: 1 });
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ msg: 'Server error asdf' });
        } finally {
            next();
        }
    }



    async registerExcel(data,req, res, next) {
       

        try {
            
            // const arrayStudents = []

            // arrayStudents.push(data);

            const students = await data.map((student) => ({
                studentId: student.studentId,
                lastName1: student.lastName1,
                lastName2: student.lastName2,
                firstName: student.firstName,
                email: student.email,
                cellPhoneNumber: student.cellPhoneNumber,
                academicCenter: student.academicCenter,
            }));


            await Student.insertMany(students);
            res.status(200).json({ message: "Students registered successfully" });
            console.log("Students registered successfully");
        } catch (error) {
            console.error("Error registering students from Excel file:", error);
            res.status(500).json({ message: "Error registering students from Excel file" });
        } finally {
            next();
        }

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


    // modify professor
    async modifyProfessorData(req, res, next) {
        try {

            //check for find the user usernames in the db
            const jsonProfessor = req.body;
            const professorFound = await Professor.findOne({ code: jsonProfessor.code }).exec();
            const professorFoundByEmail = await Professor.findOne({ email: jsonProfessor.email }).exec();
            const userFound = await User.findOne({ email: jsonProfessor.email }).exec();

            if (!professorFound) {
                return res.status(400).json({ message: 'This code dont exits ' });
            } else if (professorFoundByEmail && userFound.email != professorFoundByEmail.email) {
                return res.status(400).json({ message: 'This email is invalid for user' })
            }else{
                
                if (professorFound.code == professorFoundByEmail.code && professorFound.email == professorFoundByEmail.email) { //validaton for the email

                    if (userFound.email != professorFoundByEmail.email){
                        await User.updateOne({"email": professorFound.email}, {"email": jsonProfessor.email});
                        console.log("never arrive here");
                        await Professor.updateOne({"code": jsonProfessor.code},{
                            "firstName": jsonProfessor.firstName, "lastName1": jsonProfessor.lastName1, "lastName2": jsonProfessor.lastName2,
                            "email": jsonProfessor.email, "officePhoneNumber": jsonProfessor.officePhoneNumber, "phoneNumber": jsonProfessor.phoneNumber, 
                            "photo": jsonProfessor.photo
                        });
                    }else if (userFound.email == professorFoundByEmail.email){
    
                        await Professor.updateOne({"code": jsonProfessor.code},{
                            "firstName": jsonProfessor.firstName, "lastName1": jsonProfessor.lastName1, "lastName2": jsonProfessor.lastName2,
                            "officePhoneNumber": jsonProfessor.officePhoneNumber, "phoneNumber": jsonProfessor.phoneNumber, 
                            "photo": jsonProfessor.photo
                        });
                    }                  
                              
                    res.status(200).json({ state: true, message: 'The professor has been modified perfectly' });
                }else{
                    res.status(400).json({ state: false, message: 'Already exits a professor with this email' });
                }
                
                
            }

        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }

     // modify professor
     async unsuscribeProfessor(req, res, next) {
        try {

            //check for find the user usernames in the db
            const jsonProfessor = req.body;
            const professorFound = await Professor.findOne({ code: jsonProfessor.code }).exec();
            if (!professorFound) {
                return res.status(400).json({ message: 'This code dont exits ' });
           
            }else{
                await Professor.updateOne({"code": jsonProfessor.code},{
                    "status": 0,
                });
                                          
                res.status(200).json({ state: true, message: 'The professor has been unsuscribe' });
                
            }

        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }

     // get all professor
     async getAllProfessor(req, res, next) {
        try {
            const professorsFound = await Professor.find({}).exec();
            if (!professorsFound) {
                return res.status(400).json({ message: 'This code dont exits ' });
           
            }else{
               
                                          
                res.status(200).json({ state: true, professorsFounds: professorsFound });
                
            }

        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }

     // modify professor
     async getProfessorByID(req, res, next) {
        try {

            //check for find the user usernames in the db
            const jsonProfessor = req.body;
            const professorFound = await Professor.findOne({ code: jsonProfessor.code }).exec();
            if (!professorFound) {
                return res.status(400).json({ message: 'This code dont exits ' });
           
            }else{
                                                         
                res.status(200).json({ state: true, "professor":professorFound });
                
            }

        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }



    //-------------------------------------------------------------------------------------
    //                      Assistant Admin Functions
    //-------------------------------------------------------------------------------------

    async dissableProfessor(req, res, next) {
        
        profCode = req.params.code;

        try{
            const dissable = await Professor.updateOne({ code: profCode }, { $set: { state: false } });
            res.status(200).json({ message: "Professor Status Updated" });
        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        } finally {
            next();
        }
    };

    async enableProfessor(req, res, next) {
        
        profCode = req.params.code;

        try{
            const enableProfessor = await Professor.updateOne({ code: profCode }, { $set: { state: true } });
            res.status(200).json({ message: "Professor Status Updated" });
        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        } finally {
            next();
        }
    };

    async modifyProfessor(req, res, next) {

        try{
            const { code, firstName, lastName1, lastName2, email, officePhoneNumber, phoneNumber, photo, branch } = req.body;

            const professorToModify = await Professor.findOne({ code: code });

            if (professorToModify) {
                const professorModified = await Professor.updateOne({ code: code }, { $set: { firstName: firstName, lastName1: lastName1, lastName2: lastName2, email: email, officePhoneNumber: officePhoneNumber, phoneNumber: phoneNumber, photo: photo, branch: branch } });
                if (professorModified) {
                    res.status(200).json({ message: "Professor modified successfully" });
                } else {
                    res.status(400).json({ message: "Professor not modified" });
                }
            }

        }catch (error){
            res.status(500).json({ message: `Server error: ${error}` });
        } finally {
            next();
        }

    };

    // WorkTeam Assistant Functions

    async setCoordinator(req, res, next) {
        
        try{
            const { code, workTeam } = req.body;

            const professorToAdd = await Professor.findOne({ code: code });

            if (professorToAdd) {
                const professorModified = await WorkTeam.updateOne({ workTeamId: workTeam }, { $set: { professorCode: code } });
                if (professorModified) {
                    res.status(200).json({ message: "Professor modified successfully" });
                } else {
                    res.status(400).json({ message: "Professor not found" });
                }
            } else {
                res.status(400).json({ message: "Professor not found" });
            }
        }catch (error){
            res.status(500).json({ message: `Server error: ${error}` });
        }
        next();
    };

    async addProfessorToWorkTeam(req, res, next) {

        try{
            const { code, workTeam } = req.body;

            const professorToAdd = await Professor.findOne({ code: code });

            if (professorToAdd) {
                const addedProfessor = await WorkTeam.updateOne({ workTeamId: workTeam }, { $push: { professorsArray: professorToAdd } });
                if (addedProfessor) {
                    res.status(200).json({ message: "Professor added successfully" });
                } else {    
                    res.status(400).json({ message: "Professor not added" });
                }
            } else {
                res.status(400).json({ message: "Professor not found" });
            }
        }catch (error){
            res.status(500).json({ message: `Server error: ${error}` });
        }
        next();
    };
    
}

const singletonDAO = SingletonDAO.getInstance();

module.exports = singletonDAO ;