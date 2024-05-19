const ClassRepository = require("../database/repository/ClassRepository");
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
class ClassService {
  constructor() {
    this.repository = new ClassRepository();
  }
  async CreateClass(classInputs) {
    try {
      const {
        className,
        classID,
        department,
        course,
        classRequire,
        credit,
        details,
      } = classInputs;
      const result = await this.repository.CreateClass({
        className,
        classID,
        department,
        course,
        classRequire,
        credit,
        details,
      });
      return result;
    } catch (error) {
      console.log("err", error);
    }
  }
  async GetAllClass() {
    try {
      const data = await this.repository.getAllClass();
      return data;
    } catch (error) {
      console.log("err", error);
    }
  }
}
module.exports = ClassService;
