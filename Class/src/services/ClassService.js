const  ClassRepository  = require("../database/repository/ClassRepository");
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
class StudentService {
  constructor() {
    this.repository = new ClassRepository();
  }
  async RegisterClass(){
    try {
      const { className, department, teacher, course, classRequire, classSchedule, startDate, endDate, room, student, limitStudent, credit, expectedClass } = req.body;
      const {result} = await this.repository.CreateClass({
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
      return result;
    } catch (error) {
      console.log("err", error);
    }
  }
}
module.exports = StudentService;
