const SingletonConnexion = require('./SingeltonConnexion.js');

//Models
const User = require('../models/User');
const Student = require('../models/Student');
const Professor = require('../models/Professor');
const Assistant = require('../models/Assistant');
const Team = require('../models/Team.js');
const ActivitiesPlan = require('../models/ActivitiesPlan.js');
const Activity = require('../models/Activity.js');
const Branch = require('../models/Branch.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const erorrHandler = require('../middleware/erorrHandler');

const xlsx = require('xlsx');

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
            const newUserResult = await User.create({
                "name": jsonBody.firstName, "lastName": jsonBody.lastName1, "photo": jsonBody.photo,
                "email": jsonBody.email, "password": hashedPassword, "roles": jsonBody.roles
            });

            return true;
        } catch (e) {
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
                res.status(400).json({ status: false, message: 'User has no register' });
                return false;
            }
            if (userFound) {

                const match = await bcrypt.compare(password, userFound.password);

                if (match) {

                    res.status(200).json({ status: true, roles: [userFound.roles], message: 'User logged perfectly ' });
                    return true;

                } else {
                    res.status(400).json({ status: false, message: 'User not logged' });
                    return false;
                }
            }

        } catch {
            res.status(500).json({ status: false, message: 'Server error' });
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

        try {
            if (studentToModify) {
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
                } else {
                    res.status(400).json({ msg: 'Student not modified' });
                }
            }
        } catch {
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

    async getAllCampus(req, res, next) {

        //The request must have the parameter for the filter
        const campusActual = req.params.campus;

        try {
            const students = await Student.find({ academicCenter: campusActual }).sort({ studentId: 1 });
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ msg: 'Error getting all students by campus', error });
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



    async registerExcel(data, req, res, next) {


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
    async generateExcel (req, res, next) {
        try {
            const students = await Student.find({});
            if (students.length > 0) {


                let workbook = xlsx.utils.book_new();
                
                // Group students by campus
                const campusGroups = {};
                students.forEach(student => {
                    const campus = student.academicCenter;
                    if (!campusGroups[campus]) {
                        campusGroups[campus] = [];
                    }
                    console.log(student);
                    campusGroups[campus].push(student);
                });
                
            
                for (const campus in campusGroups) {
                    const students = campusGroups[campus];
                    
                    // Convert each student into a simple object
                    const data = students.map(student => {
                        return {
                            id: student.studentId,
                            name: student.firstName,
                            lastName1: student.lastName1,
                            lastName2: student.lastName2,
                            email: student.email,
                            phone: student.cellPhoneNumber,
                            campus: student.academicCenter,
                        };
                    });
                    
                    const worksheet = xlsx.utils.json_to_sheet(data);
                    xlsx.utils.book_append_sheet(workbook, worksheet, campus);
                }

                //Write workbook to file
                xlsx.writeFile(workbook, 'Students.xlsx');
                
                res.status(200).json({ message: "Excel file generated successfully" });
                
                
            } else {
                res.status(400).json({ msg: 'No students found' });
            }
        } catch (error) {
            res.status(500).json({ msg: 'Server error' });
        } finally {
            next();
        }
    };


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

                jsonProfessor["code"] = jsonProfessor.branch + "-" + jsonProfessor.count;

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
                if (UserValue) {
                    res.status(200).json({ status: true, password, message: 'The professor has been created perfectly his password' });
                } else {
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
            } else {

                if (professorFound.code == professorFoundByEmail.code && professorFound.email == professorFoundByEmail.email) { //validaton for the email

                    if (userFound.email != professorFoundByEmail.email) {
                        await User.updateOne({ "email": professorFound.email }, { "email": jsonProfessor.email });
                        console.log("never arrive here");
                        await Professor.updateOne({ "code": jsonProfessor.code }, {
                            "firstName": jsonProfessor.firstName, "lastName1": jsonProfessor.lastName1, "lastName2": jsonProfessor.lastName2,
                            "email": jsonProfessor.email, "officePhoneNumber": jsonProfessor.officePhoneNumber, "phoneNumber": jsonProfessor.phoneNumber,
                            "photo": jsonProfessor.photo
                        });
                    } else if (userFound.email == professorFoundByEmail.email) {

                        await Professor.updateOne({ "code": jsonProfessor.code }, {
                            "firstName": jsonProfessor.firstName, "lastName1": jsonProfessor.lastName1, "lastName2": jsonProfessor.lastName2,
                            "officePhoneNumber": jsonProfessor.officePhoneNumber, "phoneNumber": jsonProfessor.phoneNumber,
                            "photo": jsonProfessor.photo
                        });
                    }

                    res.status(200).json({ state: true, message: 'The professor has been modified perfectly' });
                } else {
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

            } else {


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

            } else {

                res.status(200).json({ state: true, "professor": professorFound });

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
            const { professorCode } = req.body;
            const professorFound = await Professor.findOne({ code: professorCode }).exec();
            if (!professorFound) {
                return res.status(400).json({ message: 'This professor dont exits ' });

            } else {
                const teamFound = await Team.findOne({ _id: jsonBody.teamCode }).exec();

                //For to remove the professor from the team
                for (var i = 0; i < teamFound.professorsArray.length; i++) {

                    if (teamFound.professorsArray[i].code == professorFound.code) {
                        teamFound.professorsArray.splice(i, 1);
                    }
                }

                //update the team
                await Team.updateOne({ _id: jsonBody.teamCode }, { "professorsArray": teamFound.professorsArray }).exec();

                res.status(200).json({ state: true, message: 'The professor has been unsuscribe from the team ' + teamFound.name + ' perfectly' });

            }

        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }

    async addProfessorToTeam(req, res, next) {

        try {
            //check for find the user usernames in the db
            const { codes } = req.body;

            //add the professor to the team
            //update the team
            await Team.updateOne({ _id: jsonBody.teamCode }, { $push: { professorsArray: codes } }).exec();

            res.status(200).json({ state: true, message: 'The professor has been unsuscribe from the team ' + teamFound.name + ' perfectly' });


        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        } finally {
            next();
        }
    };



    // Team Assistant Functions

    async setCoordinator(req, res, next) {

        try {
            const { teamCode, professorCode } = req.body;
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
        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        }
        next();
    };

    // Team Assistant Functions

    async addPlanToTeam(req, res, next) {

        try {
            const { teamId, activityPLanId } = req.body;
            const jsonObject = req.body;
            const plan = await ActivitiesPlan.findOne({ _id: activityPLanId }).exec();

            if (plan) {

                await Team.updateOne({ _id: teamId }, { $set: { activitiesPlanId: activityPLanId } });

                res.status(200).json({ status: true, message: "The activity plan set successfully" });
            } else {
                res.status(400).json({ status: false, message: "The activity plan dont exist" });
            }
        } catch (error) {
            res.status(500).json({ status: false, message: `Server error: ${error}` });
        }
        next();
    };

    async getTeams(req, res, next) {
        try {
            const teamsFound = await Team.aggregate([
                {
                    $lookup:
                    {
                        from: "branch",
                        localField: "branch",
                        foreignField: "code",
                        as: "branch"
                    }
                },
                {
                    $set: {
                        branch: { $arrayElemAt: ["$branch.name", 0] }
                        
                    }
                },
                {
                    $lookup:
                    {
                        from: "professor",
                        localField: "professorsArray",
                        foreignField: "code",
                        as: "professorsArray"
                    }
                }
                //get the size of the array studen
                ,
                {
                    $set: {
                        studentCount: { $size: "$studentsArray" }
                    }
                },
                
                {
                    $lookup:
                    {
                        from: "activitiesPlan",
                        localField: "activitiesPlanId",
                        foreignField: "_id",
                        as: "activityPLan"
                    }
                }
                ,
                {
                    $set: {
                        activityPLan: { $arrayElemAt: ["$activityPLan", 0] }
                        
                    }
                },
            ])

            //const branchName = await Branch.findOne({code: teamsFound.branch}).exec();

            res.status(200).json({ state: true, teamsFound: teamsFound });
        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        }
        next();
    };

    async getTeamFromId(req, res, next) {
        try {
            const teamId= req.params.id;
            //print fo team id
            console.log(teamId);
            const teamsFound = await Team.aggregate([
                {
                    $lookup:
                    {
                        from: "branch",
                        localField: "branch",
                        foreignField: "code",
                        as: "branch"
                    }
                },
                {
                    $set: {
                        branch: { $arrayElemAt: ["$branch.name", 0] }
                        
                    }
                },
                {
                    $lookup:
                    {
                        from: "professor",
                        localField: "professorsArray",
                        foreignField: "code",
                        as: "professorsArray"
                    }
                }
                //get the size of the array studen
                ,
                {
                    $set: {
                        studentCount: { $size: "$studentsArray" }
                    }
                },
                
                {
                    $lookup:
                    {
                        from: "activitiesPlan",
                        localField: "activitiesPlanId",
                        foreignField: "_id",
                        as: "activityPLan"
                    }
                }
                ,
                {
                    $set: {
                        activityPLan: { $arrayElemAt: ["$activityPLan", 0] }
                        
                    }
                },
            ])

            //const branchName = await Branch.findOne({code: teamsFound.branch}).exec();
            //get the team from with a for
            let teamFound = null;
            for (let i = 0; i < teamsFound.length; i++) {
                
                if(teamsFound[i]._id.toString() == teamId){
                    teamFound = teamsFound[i];
                    break;
                }
            }

             //asign the activity plan to the team
            teamFound.ActivitiesPlan = await SingletonDAO.getInstance().getActivitiesPlanFromIdParam(teamFound.activitiesPlanId)
            
            res.status(200).json({ state: true, teamsFound: teamFound });
        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        }
        next();
    };

    //-------------------------------------------------------------------------------------
    //                      ActivitiesPlan Admin Functions
    //-------------------------------------------------------------------------------------

    async getActivitiesPlan(req, res, next) {

        try {

            const activitiesPlanFound = await ActivitiesPlan.aggregate([
                {
                    $lookup:
                    {
                        from: "activity",
                        localField: "activitiesArray",
                        foreignField: "_id",
                        as: "activitiesArray"
                    }
                }
                

            ]).exec();
            res.status(200).json({ state: true, activitiesPlanFound: activitiesPlanFound });
        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        }
    }

    async getActivitiesPlanFromId(req, res, next) {

        try {
            const planId= req.params.id;
            const activitiesPlan = await ActivitiesPlan.aggregate([
                {
                    $lookup:
                    {
                        from: "activity",
                        localField: "activitiesArray",
                        foreignField: "_id",
                        as: "activitiesArray"
                    }
                }
                

            ]).exec();
            //for to get the plan from the id
            let activitiesPlanFound = null;
            for (let i = 0; i < activitiesPlan.length; i++) {
                if(activitiesPlan[i]._id.toString() == planId){
                    activitiesPlanFound = activitiesPlan[i];
                    break;
                }
            }

            res.status(200).json({ state: true, activitiesPlanFound: activitiesPlanFound });
        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        }
    }


    async createActivitiesPlan(req, res, next) {
        try {


            const jsonActivitiesPlan = req.body;

            const activityToAdd = await Professor.findOne({ _id: jsonActivitiesPlan.activityId }).exec();
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
            await ActivitiesPlan.updateOne({ _id: jsonBody.planId }, { $push: { activitiesArray: jsonBody.activities } }).exec();

            res.status(200).json({ state: true, message: 'The Activities was added to play perfectly' });


        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }
    //get the next activity base on the plan id
    async getNextActivity(req, res, next) {
        try {
            const jsonObject = req.body;
            console.log(jsonObject.planId);
            const activityPlans = await ActivitiesPlan.aggregate([
                {
                    $lookup:
                    {
                        from: "activity",
                        localField: "activitiesArray",
                        foreignField: "_id",
                        as: "activitiesArray"
                    }
                },

            ]).exec();
            // for to get the plan id
            let activitiesPlan = {}
            for (let i = 0; i < activityPlans.length; i++) {
                if (activityPlans[i]._id == jsonObject.planId) {
                    activitiesPlan = activityPlans[i];
                }
            }
            //get the now date
            let now = new Date();
            //get the next activity
            let nextActivity = {}
            for (let i = 0; i < activitiesPlan.activitiesArray.length; i++) {
                //print the date
               
                if (activitiesPlan.activitiesArray[i].dateTime > now) {

                    nextActivity = activitiesPlan.activitiesArray[i];
                    break;
                }
            }
            //console.log(activitiesPlan);
            console.log(nextActivity);

            res.status(200).json({ state: true, activityPlan: nextActivity });
        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        }
        next();
    }

    //-------------------------------------------------------------------------------------
    //                      Activity Admin Functions
    //-------------------------------------------------------------------------------------
    //register a new activity
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
    
    //get the activities
    async getActivities(req, res, next) {
        try {
            const jsonObject = req.body;
            const activities = await Activity.find().exec();
            res.status(200).json({ state: true, activities: activities });
        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        }
        next();
    }
    //get the activities from the id
    async getActivityFromId(req, res, next) {
        try {
            
            const id= req.params.id;
            const activities = await Activity.findOne({_id: id}).exec();
            res.status(200).json({ state: true, activity: activities });
        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        }
        next();
    }

    async registerComment (req, res, next) {
        try {

           let jsonComment = req.body;
           jsonComment.comment.repliesArray = [];
            //validate if the activity exists
            const activityFound = await Activity.findOne({ _id: jsonComment.activityId });
            if (!activityFound) {
                return res.status(400).json({ message: 'This activity dont exits ' });
            }
             //create the comment
            await Activity.updateOne( {_id: jsonComment.activityId},{$push: {commentsArray: jsonComment.comment}}).exec(); 
            res.status(200).json({ state: true, message: 'The Comment has been register perfectly' });
        } catch (e) {
            res.status(500).json({ message: `Server error: ${e}` });
        }
        next();
    }

    async replyComment (req, res, next) {
        
        try{
            const jsonComment = req.body;
           
            //validate if the activity exists
            const activityFound = await Activity.findOne({ _id: jsonComment.activityId });
            if (!activityFound) {
                return res.status(400).json({ message: 'This activity dont exits ' });
            }
            
            //valide with a for if the comment exists
            let commentFound = false;
            for (let i = 0; i < activityFound.commentsArray.length; i++) {
                if (activityFound.commentsArray[i]._id.toString() == jsonComment.commentRepy) {
                    commentFound = true;
                    break;
                }
            }
            if (!commentFound) {
                //the id comment is in the replies array
                for (let i = 0; i < activityFound.commentsArray.length; i++) {
                    for (let j = 0; j < activityFound.commentsArray[i].repliesArray.length; j++) {
                        if (activityFound.commentsArray[i].repliesArray[j]._id.toString() == jsonComment.commentRepy) {
                            //create the id of the reply based on the id of the comment
                            commentFound = true;
                            jsonComment.comment.commentReplingId = new mongoose.Types.ObjectId( jsonComment.commentRepy);
                            jsonComment.commentRepy = activityFound.commentsArray[i]._id.toString();
                            await Activity.updateOne({ _id: jsonComment.activityId, "commentsArray._id": jsonComment.commentRepy }, 
                            { $push: { "commentsArray.$.repliesArray": jsonComment.comment} }).exec();
                            res.status(200).json({ state: true, message: 'The Comment has been register perfectly' });
                            break;                          
                        }           
                    }
                }
                if (!commentFound) {
                    return res.status(400).json({ message: 'This comment dont exits ' });
                }
            }else{
                //create the id of the reply
                jsonComment.comment.commentReplingId = new mongoose.Types.ObjectId(jsonComment.commentRepy);

                //reply the comment of the activity
                await Activity.updateOne({ _id: jsonComment.activityId, "commentsArray._id": jsonComment.commentRepy }, 
                { $push: { "commentsArray.$.repliesArray": jsonComment.comment} }).exec();
                res.status(200).json({ state: true, message: 'The Comment has been register perfectly' });
            }  

        } catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        }
        next();

    }

    async activateActivity (req, res, next) {
        try{

            const activity = req.body;
            const activityFound = await Activity.findOne({ _id: activity.activityId });

            if (!activityFound) {
                return res.status(400).json({ message: 'This activity dont exits ' });
            }

            await Activity.updateOne({_id: activity.activityId},{  $set: { status: 1 } });
        }catch (error) { 
            res.status(500).json({ message: `Server error: ${error}` });
        }
    }

    async modifyActivity (req, res, next) {

        try{
            const activity = req.body;

            const activityFound = await Activity.findOne({ _id: activity.activityId });

            if (!activityFound) {
                return res.status(400).json({ message: 'This activity dont exits ' });
            }

            await Activity.updateOne({_id: activity.activityId},{  $set: { name: activity.name, activityType: activity.activityType, week: activity.week, dateTime: activity.dateTime,
                responsibleTeachers: activity.responsibleTeachers, sessionLink: activity.sessionLink, poster: activity.poster, status: activity.status } });

            res.status(200).json({ state: true, message: 'The Activity has been modify perfectly' });

        }catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        }

    }

    async nextActivity (req, res, next) {
        
        const today = new Date();
        today.setHours(0,0,0,0);

        try{
            const nextActivity = await Activity.findOne({ dateTime: { $gte: today } }).sort({ dateTime: 1 }).limit(1);            
            
            res.status(200).json({ state: true, message: 'The next Activity has been found perfectly', nextActivity: nextActivity });

        }catch (error) {
            res.status(500).json({ message: `Server error: ${error}` });
        }
    }

}

const singletonDAO = SingletonDAO.getInstance();

module.exports = singletonDAO;