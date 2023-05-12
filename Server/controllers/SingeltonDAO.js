const SingletonConnexion = require('./SingeltonConnexion.js');

//Models
const User = require('../models/User');
const Student = require('../models/Student');
const Professor = require('../models/Professor');
const Assistant = require('../models/Assistant');
const Team = require('../models/Team.js');
const ActivitiesPlan = require('../models/ActivitiesPlan.js');
const Activity = require('../models/Activity.js');

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

    async registerUserFrom(jsonBody) {

        if (!jsonBody.email || !jsonBody.password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }
        //check for duplicate usernames in the db
        const duplicate = await User.findOne({ email: jsonBody.email }).exec();
        
        if (duplicate) {
            return false;
        }

        try {
            //encrypt password
            const hashedPassword = await bcrypt.hash(jsonBody.password, 10);

            //create and store the new user
            const newUserResult = await User.create({ "name": jsonBody.firstName, "lastName": jsonBody.lastName1 ,"photo": jsonBody.photo, 
            "email": jsonBody.email, "password": hashedPassword });
           
            return true;
        } catch (e){
            console.log(e);
            return false;
        }
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
                    
                    res.status(200).json({ status:true, roles: [userFound.roles], message: 'User logged perfectly ' });
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
            jsonProfessor["count"] = 0;
            const userFound = await User.findOne({ email: jsonProfessor.email }).exec();
            
            
            jsonProfessor.branch = "CA";
            
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

                const jsonBody = {
                    "email": jsonProfessor.email,
                    "name": jsonProfessor.firstName,
                    "lastName": jsonProfessor.lastName1,
                    "password": password,
                    "roles": 1597
                };
                let UserValue = await SingletonDAO.getInstance().registerUserFrom(jsonBody);
                if (UserValue){                    
                    res.status(200).json({ status: true,password, message: 'The professor has been created perfectly his password' });
                }else{
                    console.log("Error al crear el usuario");
                    res.status(400).json({ status: false, message: 'The professor has not been created' });
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
    //                      Team Admin Functions
    //-------------------------------------------------------------------------------------
    async createTeam(req, res, next) {
        try {

            
            const jsonTeam = req.body;
            //create and store the new team
           await Team.create({
                "name": jsonTeam.name, "coordinator": jsonTeam.coordinator, "professorsArray": jsonTeam.professorsArray, "studentsArray": jsonTeam.studentsArray,
                "branch": jsonTeam.branch, "academicYear": jsonTeam.academicYear, "workPlanId": jsonTeam.workPlanId
            });           
            
            res.status(200).json({ state: true, message: 'The Tem has been created perfectly' });
            

        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }

    async unsuscribeProfessor(req, res, next) {
        try {

            //check for find the user usernames in the db
            const jsonBody = req.body;
            const professorFound = await Professor.findOne({ code: jsonBody.professorCode }).exec();
            if (!professorFound) {
                return res.status(400).json({ message: 'This professor dont exits ' });
           
            }else{
                const teamFound = await Team.findOne({ _id: jsonBody.teamCode }).exec();
                
                //For to remove the professor from the team
                for (var i = 0; i < teamFound.professorsArray.length; i++) {
                    
                    if (teamFound.professorsArray[i].code == professorFound.code) {
                        teamFound.professorsArray.splice(i, 1);
                    }
                }
                
                //update the team
                await Team.updateOne({_id: jsonBody.teamCode},{"professorsArray":teamFound.professorsArray}).exec();
                                          
                res.status(200).json({ state: true, message: 'The professor has been unsuscribe from the team '+teamFound.name+' perfectly' });
                
            }

        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }

    async addProfessorToTeam(req, res, next) {
        
        try{
            //check for find the user usernames in the db
            const jsonBody = req.body;
            const professorFound = await Professor.findOne({ code: jsonBody.professorCode }).exec();
            if (!professorFound) {
                return res.status(400).json({ message: 'This professor dont exits ' });
           
            }else{
                const teamFound = await Team.findOne({ _id: jsonBody.teamCode }).exec();
                
                //add the professor to the team
                //update the team
                await Team.updateOne({_id: jsonBody.teamCode},{  $push: { professorsArray:{"code":professorFound.code} } }).exec();
                                          
                res.status(200).json({ state: true, message: 'The professor has been unsuscribe from the team '+teamFound.name+' perfectly' });
                
            }
        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        } finally {
            next();
        }
    };

    

    // Team Assistant Functions

    async setCoordinator(req, res, next) {
        
        try{
            const { teamCode,professorCode } = req.body;
            const professorToAdd = await Professor.findOne({ code: professorCode }).exec();
            
            if (professorToAdd) {
                const jsonProfessorToAdd = {
                    "code": professorToAdd.code,
                    "firstName": professorToAdd.firstName,
                    "lastName1": professorToAdd.lastName1,
                    "lastName2": professorToAdd.lastName2,
                    "email": professorToAdd.email
                };
                await Team.updateOne({ _id: teamCode }, { $set: { coordinator: jsonProfessorToAdd } });
                
                res.status(200).json({ message: "The new coordinator set successfully" });
            } else {
                res.status(400).json({ message: "Professor not found" });
            }
        }catch (error){
            res.status(500).json({ message: `Server error: ${error}` });
        }
        next();
    };

    //-------------------------------------------------------------------------------------
    //                      ActivitiesPlan Admin Functions
    //-------------------------------------------------------------------------------------
    async createActivitiesPlan(req, res, next) {
        try {

            
            const jsonCode = req.body;

            const activityToAdd = await Professor.findOne({ _id: jsonCode.activityId }).exec();
            console.log(activityToAdd);
           await ActivitiesPlan.create({
                "name": jsonActivitiesPlan.name, "startDate": jsonActivitiesPlan.startDate, "endDate": jsonActivitiesPlan.endDate, "activitiesArray": jsonActivitiesPlan.activitiesArray
            });           
            
            res.status(200).json({ state: true, message: 'The Plan has been created perfectly' });
            

        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }

    async addActivitytoPlan(req, res, next) {
        try {

            
            const jsonBody = req.body;            
            await ActivitiesPlan.updateOne({_id: jsonBody.planId},{  $push: { activitiesArray: jsonBody.activities } }).exec();
            
            res.status(200).json({ state: true, message: 'The Activities was added to play perfectly' });
            

        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }

    

    async registerActivity(req, res, next) {
        try {

            
            const jsonActivity = req.body;

           await Activity.create({
                "name": jsonActivity.name, "activityType": jsonActivity.activityType, "week": jsonActivity.week, "dateTime": jsonActivity.dateTime, 
                "responsibleTeachers": jsonActivity.responsibleTeachers, "sessionLink": jsonActivity.sessionLink, "poster": jsonActivity.poster, 
                "status": jsonActivity.status, "commentsArray": jsonActivity.commentsArray
            });           
            
            res.status(200).json({ state: true, message: 'The Activity has been register perfectly' });
            

        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }
    
}

const singletonDAO = SingletonDAO.getInstance();

module.exports = singletonDAO ;