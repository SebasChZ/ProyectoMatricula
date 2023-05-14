const mongoose = require('mongoose');

const brachSchema = new mongoose.Schema({
       
    
    name: { type: String, required: true },
    code: { type: String},

  },{collection: 'branch'});




module.exports = mongoose.model('branch', brachSchema);