const SingletonConnexion = require('./SingeltonConnexion.js');
const SingletonDAO = require('./SingeltonDAO.js');
const mongoose = require('mongoose');

// Define the array of documents to be inserted
const activities = [
  {
    name: "Orientadoras",
    code: "O"
  },
  {
    name: "Motivacionales",
    code: "M"
  },
  {
    name: "Apoyo a la vida estudiantil",
    code: "AE"
  },
  {
    name: "Orden técnico",
    code: "OT"
  },
  {
    name: "Recreación",
    code: "R"
  }
];

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

async function insertActivities() {
  try {
    const activityTypeModel = mongoose.model('activityType', activityTypeSchema);
    SingletonConnexion.dbConnect();
    console.log("Inserting activities...");
    console.log(activities);
    const result = await activityTypeModel.insertMany(activities);
    console.log(`${result.insertedCount} activities inserted.`);
  }catch(error) {
    console.log(error);
  }

}

module.exports = { insertActivities };
