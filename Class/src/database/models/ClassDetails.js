const mongoose = require("mongoose");
require("../../../../DangNhap/src/database/models/Student");

const grade = new mongoose.Schema({
  regular: {
    type: Number,
  },
  midterm: {
    type: Number,
  },
  final: {
    type: Number,
  },
});
const ClassDetailsSchema = new mongoose.Schema(
  {
    classID:{
      type: String,
      required: true,
      ref: "Class",
    },
   detailsID: {
      type: String,
      required: true,
      ref: "Class",
    },
    studentID: {
      type: String,
      required: true,
      ref: "Student",
    },
    classified: {
      type: Boolean,
      required: true,
    },
    grade: grade,
    totalGrade: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("ClassDetails", ClassDetailsSchema);
