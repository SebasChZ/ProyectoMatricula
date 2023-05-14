const mongoose = require("mongoose");

const coordinatorSchema = new mongoose.Schema({
    code: {
        type: String, required: true
    },
    firstName: {
        type: String, required: true
    },
    lastName1: {
        type: String, required: true
    },
    lastName2: {
        type: String
    },
    email: {
        type: String, required: true
    },
    _id: false
  });
  
const teamSchema = new mongoose.Schema({
       
    name: { type: String, 
        required: true },

    coordinator: { type: coordinatorSchema, required: true },

    professorsArray: [String],

    studentsArray: [String],

    branch: { type: String },

    academicYear: { type: Number, 
        required: true },

    activitiesPlanId: { type: mongoose.Types.ObjectId, ref: 'activitiesPlan', required: false }
  },{collection: 'team'});
  
module.exports = mongoose.model('team', teamSchema);