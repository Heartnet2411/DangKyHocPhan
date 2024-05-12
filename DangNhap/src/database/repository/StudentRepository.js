const {Student} = require("../models")
const {
    APIError,
    BadRequestError,
    STATUS_CODES,
  } = require("../../utils/app-errors");
  class StudentRepository{
    async CreateStudent({ name,studentID,password,email,department,phoneNumber, salt}){
      try {
        const student = new Student({
          name,
          studentID,
          password,
          email,
          department,
          phoneNumber,
          salt
        });
        const resultStudent = await student.save().then(()=>{console.log("Save")});
        return resultStudent;
      } catch (error) {
        // throw new APIError(
          // "APIError",
          // STATUS_CODES.INTERNAL_ERROR,
          // "Error in create student",
       //)
        console.log('err',error)
      }
    }
    async FindStudentByStudentID({ studentID }) {
      try {
        const student = await Student.findOne({studentID});
        return student;
      } catch (error) {
        // throw new APIError(
          // "APIError",
          // STATUS_CODES.INTERNAL_ERROR,
          // "Error in find student by studentID",
        // )
         console.log('err',error)
      }
    }
      async FindStudentByID ({id}){
        try{
          const student = await Student.findById(id).populate("name")
          .populate("gender")
          .populate("studentID")
          .populate("email")
          .populate("department")
          .populate("phoneNumber")
          ;
          return student;
        }catch(error){
          throw new APIError(
            "APIError",
            STATUS_CODES.INTERNAL_ERROR,
            "Error in find student by ID",
          )
        }
        }
      }

  module.exports = StudentRepository;