const mongoose = require("mongoose");
require("../../../../DangNhap/src/database/models/Student");

const classSchedule = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});
const details = new mongoose.Schema({
  detailsID: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  classSchedule: classSchedule,
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  student: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  limitStudent: {
    type: Number,
    required: true,
  },
  expectedClass: {
    type: String,
  },
});
const classSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
    },

    classID: {
      type: String,
      required: true,
    },
    department: [
      {
        type: String,
        required: true,
      },
    ],
    course: {
      type: String,
      required: true,
    },
    classRequire: [
      {
        type: String,
      }
    ],

    credit: {
      type: Number,
      required: true,
    },
    details: [details]
    
    
    
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Class", classSchema);
