const mongoose = require("mongoose");

const administrativeAssistantSchema = new mongoose.Schema({
    administrativeAssistantId: { type: String, 
        required: true, 
        unique: true },

    lastName1: { type: String, 
        required: true },

    lastName2: { type: String, 
        required: true },

    firstName: { type: String, 
        required: true },

    email: { type: String, 
        required: true, 
        unique: true },

    cellPhoneNumber: { type: String },

    academicCenter: { type: String ,required: true},
    
    photo: { data: Buffer, contentType : String }
  },{collection: 'Assistant'});
  
module.exports = mongoose.model('AdministrativeAssistant', administrativeAssistantSchema);
  