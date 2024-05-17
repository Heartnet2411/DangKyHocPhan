const StudentRepository = require("../database/repository/StudentRepository");
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
    this.repository = new StudentRepository();
  }
  async Login(studentInputs) {
    const { studentID, password } = studentInputs;
    try {
      const ExistStudent = await this.repository.FindStudentByStudentID({
        studentID,
      });
      if (ExistStudent) {
        // console.log(ExistStudent)
        const isPasswordValid = await ValidatePassword(
          password,
          ExistStudent.password,
          ExistStudent.salt
        );
        if (isPasswordValid && ExistStudent._id) {
          const token = await GenerateSignature({
            studentID: ExistStudent.studentID,
            _id: ExistStudent._id,
          });
          return FormateData({ id: ExistStudent._id, token });
        }
      }

      return FormateData(null);
    } catch (error) {
      //throw new APIError("Data not found", error);
      console.log("err", error);
    }
  }
  async CreateStudent(studentInputs) {
    const { name, studentID, password, email, department, phoneNumber } =
      studentInputs;
    try {
      let salt = await GenerateSalt();
      let hashedPassword = await GeneratePassword(password, salt);
      const result = await this.repository.CreateStudent({
        name,
        studentID,
        password: hashedPassword,
        email,
        department,
        phoneNumber,
        salt,
      });
      if (result && result._id) {
        const token = await GenerateSignature({
          studentID: studentID,
          _id: result._id,
        });
        return FormateData({ id: result._id, token });
      }
    } catch (error) {
      //throw new APIError("Data not found", error);
      console.log("err", error);
    }
  }
  // async GetProfile(id) {
  //   try {
  //     const student = await this.repository.FindStudentByID(id);
  //     if (!student) {
  //       throw new APIError("Student not found", STATUS_CODES.NOT_FOUND);
  //     }
  //     return FormateData(student);
  //   } catch (error) {
  //     console.log("err", error);
  //     throw new APIError(
  //       "An error occurred while fetching the profile",
  //       STATUS_CODES.INTERNAL_SERVER_ERROR
  //     );
  //   }
  // }
  async FindStudentByID({ id }) {
    try {
      const student = await Student.findById(id)
        .populate("name")
        .populate("gender")
        .populate("studentID")
        .populate("email")
        .populate("department")
        .populate("phoneNumber");
      return student;
    } catch (error) {
      throw new APIError(
        "APIError",
        STATUS_CODES.INTERNAL_ERROR,
        "Error in find student by ID"
      );
    }
  }
}
module.exports = StudentService;
