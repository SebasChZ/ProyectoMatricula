const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  lastName1: {
    type: String,
    required: true,
  },
  lastName2: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cellPhoneNumber: {
    type: String,
    required: true,
  },
  academicCenter: {
    type : String,
    required: true,
  },
},{collection: 'student'});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;