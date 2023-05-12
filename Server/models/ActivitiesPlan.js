const mongoose = require('mongoose');

const activitiesPlanSchema = new mongoose.Schema({
       
    name: { type: String},
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    activitiesArray: {type: [mongoose.Schema.Types.ObjectId], ref: 'activity', required: false},
    
  },{collection: 'activitiesPlan'});




module.exports = mongoose.model('activitiesPlan', activitiesPlanSchema);