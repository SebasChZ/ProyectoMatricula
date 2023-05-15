const mongoose = require('mongoose');

const activityTypeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  }, {collection: "activityType"});


module.exports = mongoose.model('activityType', activityTypeSchema);