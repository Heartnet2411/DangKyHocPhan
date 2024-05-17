const { Class } = require("../models");
const {
  APIError,
  BadRequestError,
  STATUS_CODES,
} = require("../../utils/app-errors");
class ClassRepository {
  async CreateClass({
    className,
    department,
    teacher,
    course,
    classRequire,
    classSchedule,
    startDate,
    endDate,
    room,
    student,
    limitStudent,
    credit,
    expectedClass,
  }) {
    try {
      const newClass = new Class({
        className,
        department,
        teacher,
        course,
        classRequire,
        classSchedule,
        startDate,
        endDate,
        room,
        student,
        limitStudent,
        credit,
        expectedClass,
      });
      const resultClass = await newClass.save().then(() => {
        console.log("Save");
      });
      return resultClass;
    } catch (error) {
      // throw new APIError(
      // "APIError",
      // STATUS_CODES.INTERNAL_ERROR,
      // "Error in create student",
      //)
      console.log("err", error);
    }
  }
  async FindClassByClassID({ classID }) {
    try {
      const Resultclass = await Class.findOne({ classID });
      return Resultclass;
    } catch (error) {
      // throw new APIError(
      // "APIError",
      // STATUS_CODES.INTERNAL_ERROR,
      // "Error in find student by studentID",
      // )
      console.log("err", error);
    }
  }
  async FindClassByID({ id }) {
    try {
      const rs = await Class.findById(id);
      return rs;
    } catch (error) {
      throw new APIError(
        "APIError",
        STATUS_CODES.INTERNAL_ERROR,
        "Error in find student by ID"
      );
    }
  }
  async getAllClass(){
    try {
      const rs = await Class.find();
      return rs;
    } catch (error) {
      console.log(error)
    }
  }
  async getClassByDepartment({department}){
    try {
      const rs = await Class.find({department});
      return rs;
    } catch (error) {
      console.log(error)
    }
  }
}
module.exports = ClassRepository;
