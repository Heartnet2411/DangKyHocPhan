const { ClassDetails } = require("../models");
class ClassDetailsRepository {
  async CreateClassDetails({
    classID,
    studentID,
    classified,
    grade,
    totalGrade,
  }) {
    try {
      const newClassDetails = new ClassDetails({
        classID,
        studentID,
        classified,
        grade,
        totalGrade,
      });
      const resultClassDetails = await newClassDetails.save().then(() => {
        console.log("Save");
      });
      return resultClassDetails;
    } catch (error) {
      // throw new APIError(
      // "APIError",
      // STATUS_CODES.INTERNAL_ERROR,
      // "Error in create student",
      //)
      console.log("err", error);
    }
  }
    async FindClassDetailsByClassID({ classID }) {
        try {
        const ResultClassDetails = await ClassDetails.findOne({classID})
        return ResultClassDetails;
        }
        catch (error) {
        // throw new APIError(
        // "APIError",
        // STATUS_CODES.INTERNAL_ERROR,
        // "Error in find student by studentID",
        // )
        console.log("err", error);
        }
        }
    async FindClassDetailsByStudentID({ studentID }) {
        try {
        const ResultClassDetails = await ClassDetails
        .find({studentID})
        return ResultClassDetails;
        }
        catch (error) {
        // throw new APIError(
        // "APIError",
        // STATUS_CODES.INTERNAL_ERROR,
        // "Error in find student by studentID",
        // )
        console.log("err", error);
        }
    }
}
