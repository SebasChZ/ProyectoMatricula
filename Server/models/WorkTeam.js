const mongoose = require("mongoose");

const workTeamSchema = new mongoose.Schema({
    workTeamId: { type: String,
        required: true},
        
    name: { type: String, 
        required: true },

    professorCode: { type: mongoose.Schema.ObjectId , 
        required: true, ref: 'Professor' },

    professorsArray: [{ type: mongoose.Schema.Types.ObjectId, 
        ref: 'Professor' }],

    studentsArray: [{ type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student' }],

    academicCenter: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'AcademicCenter' },

    academicYear: { type: Number, 
        required: true },

    workPlanId: { type: Number, 
        required: true }
  },{collection: 'workteam'});
  
module.exports = mongoose.model('WorkTeam', workTeamSchema);