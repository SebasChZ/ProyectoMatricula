const mongoose = require('mongoose');

const ProfessorSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName1: {
        type: String,
        required: true
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
        type: Schema.Types.Mixed
    },
    status: {
        type: Boolean, default: true
    },
});

const objetoJson = { "name": "John", "age": 30, "city": "New York" };
module.exports = mongoose.model('User', userSchema);
