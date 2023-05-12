const mongoose = require('mongoose');
const ProfessorSchema = new mongoose.Schema({
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
    officePhoneNumber: {
        type: String
    },
    cellPhoneNumber: {
        type: String
    },
    photo: {
        type: String
    },
    branch: {
         type: String 
    },
    count:{
        type: Number
    },
    status: {
        type: Boolean, default: true
    },
    _id: false
}, { collection: 'professor' });

module.exports = mongoose.model('Professor', ProfessorSchema);
