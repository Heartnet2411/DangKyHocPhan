const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    studentID: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    gender: {
      type: String,
    },
    GPA: {
      type: Number,
    },
    totalCredit: {
      type: Number,
    },
    salt: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Student", studentSchema);
