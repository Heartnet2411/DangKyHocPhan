const { Class } = require("../models");
const {
  APIError,
  BadRequestError,
  STATUS_CODES,
} = require("../../utils/app-errors");
class ClassRepository {
  async CreateClass({
    className,
    classID,
    department,
    course,
    classRequire,
    credit,
    details,
  }) {
    try {
      const newClass = new Class({
        className,
        classID,
        department,
        course,
        classRequire,
        credit,
        details,
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
  async getAllClass() {
    try {
      const data = await Class.find();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async getClassByDepartment({ department }) {
    try {
      const rs = await Class.find({ department });
      return rs;
    } catch (error) {
      console.log(error);
    }
  }
  async findClassIdByDetailsId({detailsID}) {
    const classObj = await Class.findOne({ 'details._id': detailsId });
    return classObj ? classObj.classID : null;
  }
}





module.exports = ClassRepository;
