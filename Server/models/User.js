const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: false
    },
    roles: {
         type: Number, 
         default:   1

    }
}, { collection: 'user' });


module.exports = mongoose.model('user', userSchema);
