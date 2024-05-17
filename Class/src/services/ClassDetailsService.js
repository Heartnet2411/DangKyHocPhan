const ClassDetailsRepository= require("../database/repository/ClassDetailsRepository");
const {
  APIError,
  BadRequestError,
  STATUS_CODES,
} = require("../utils/app-errors");
const {
  FormateData,
  GeneratePassword,
  GenerateSalt,
  GenerateSignature,
  ValidatePassword,
} = require("../utils");
class ClassDetailsService {
  constructor() {
    this.repository = new ClassDetailsRepository();
  }
  async CreateClassDetails({
    classID,
    studentID,
    classified,
    grade,
    totalGrade,
  }) {
    try {
      const result = await this.repository.CreateClassDetails({
        classID,
        studentID,
        classified,
        grade,
        totalGrade,
      });
      return result;
    } catch (error) {
      console.log("err", error);
    }
  }
  async FindClassDetailsByClassID({ classID }) {
    try {
      const ResultClassDetails = await this.repository.FindClassDetailsByClassID({ classID });
      return ResultClassDetails;
    } catch (error) {
      console.log("err", error);
    }
  }
  async FindClassDetailsByStudentID({ studentID }) {
    try {
      const ResultClassDetails = await this.repository.FindClassDetailsByStudentID({ studentID });
      return ResultClassDetails;
    } catch (error) {
      console.log("err", error);
    }
  }
}