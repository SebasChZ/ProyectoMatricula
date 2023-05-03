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
    roles: {
         type: Number, 
         default:   1

    }
});


module.exports = mongoose.model('user', userSchema);
