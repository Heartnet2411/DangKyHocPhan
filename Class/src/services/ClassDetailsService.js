const ClassDetailsRepository = require("../database/repository/ClassDetailsRepository");
//const ClassRepository = require("../database/repository/ClassRepository");

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
    detailsID,
    studentID,
    classified,
    grade,
    totalGrade,
  }) {
    try {
      const data = await this.repository.CreateClassDetails({
        classID,
        detailsID,
        studentID,
        classified,
        grade,
        totalGrade,
      });

      return FormateData(data);
    } catch (error) {
      console.log("err", error);
    }
  }
  async FindClassDetailsByDetailsID({ detailsID }) {
    try {
      const ResultClassDetails =
        await this.repository.FindClassDetailsByDetailsID({ detailsID });
      return ResultClassDetails;
    } catch (error) {
      console.log("err", error);
    }
  }
  async FindClassDetailsByStudentID({ studentID }) {
    try {
      const ResultClassDetails =
        await this.repository.FindClassDetailsByStudentID({ studentID });
      return ResultClassDetails;
    } catch (error) {
      console.log("err", error);
    }
  }
  
}
module.exports = ClassDetailsService;
