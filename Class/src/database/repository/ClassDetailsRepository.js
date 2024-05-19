const { ClassDetails, Class } = require("../models");
const mongoose = require('mongoose');
class ClassDetailsRepository {
 
  async CreateClassDetails({
    classID,
    detailsID,
    studentID,
    classified,
    grade,
    totalGrade,
  }) {
    try {
      const classExist = await Class.findOne({ classID });
      if (classExist) {
        console.log(classExist);
        const classRequire = classExist.classRequire;
        console.log(classRequire);
        const registeredClasses = await ClassDetails.find({ studentID });
        //nếu tất cả các phần tử của classRequire đều có trong registeredClass.classID thì mới cho phép tạo classDetails
        let count = 0;
        classRequire.forEach((element) => {
          registeredClasses.forEach((item) => {
            if (element === item.classID && item.classified === true) {
              count++;
            }
          });
        });
        if (count === classRequire.length || classRequire === []) {
          console.log("count", count);
          // console.log("classRequire.length", classRequire.length);
          //tính điểm tổng kết
          let totalGrade = 0;
          if (grade) {
            totalGrade =
              grade.regular * 0.2 + grade.midterm * 0.3 + grade.final * 0.5;
          }
          //mặc định classified = false khi nào có đủ 3 cột điểm của grade thì classified = true
          //mặc định classified = false khi nào có đủ 3 cột điểm của grade thì classified = true
          const newClassDetails = new ClassDetails({
            classID,
            detailsID,
            studentID,
            classified,
            grade,
            totalGrade,
          });
          const resultClassDetails = await newClassDetails.save()
          //console.log(resultClassDetails)
          return resultClassDetails;
        }
        return null;
      }
      
    } catch (error) {
      // throw new APIError(
      // "APIError",
      // STATUS_CODES.INTERNAL_ERROR,
      // "Error in create student",
      //)
      console.log("err", error);
    }
  }
  async FindClassDetailsByDetailsID({ detailsID }) {
    try {
      const ResultClassDetails = await ClassDetails.findOne({ detailsID });
      return ResultClassDetails;
    } catch (error) {
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
      // tìm các classDetails mà sinh viên đã đăng kí , đồng thời lấy dữ liệu từ class và details khi có classID và detailsID,nhớ là details là một mảng lồng trong class chứ không phải model tách biệt
      const ResultClassDetails = await ClassDetails.find({
        studentID,
      })
      for (let detail of ResultClassDetails) {
        detail.classID = await Class.findOne({ classID: detail.classID })
         detail.detailsID =detail.classID.details.find(
          (item) => item.detailsID === detail.detailsID
        );
        // let foundExpectedClass = detail.classID.details.find((item)=>
        // item.expectedClass===detail.expectedClass)
        // if(foundExpectedClass){
          // detail=foundExpectedClass.expectedClass
        // }
        
        //console.log(detail.detailsID)


      }
  
      //const ResultClassDetails = await ClassDetails.find({ studentID });
      return ResultClassDetails;
    } catch (error) {
      // throw new APIError(
      // "APIError",
      // STATUS_CODES.INTERNAL_ERROR,
      // "Error in find student by studentID",
      // )
      console.log("err", error);
    }
  }

}

module.exports = ClassDetailsRepository;
