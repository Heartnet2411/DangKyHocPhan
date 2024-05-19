const ClassService = require("../services/ClassService");
const ClassDetailsService = require("../services/ClassDetailsService");
const auth = require("./middlewares/auth");
const service = new ClassService();
const DetailsService = new ClassDetailsService();
module.exports = (app) => {
  app.post("/class/create-class", async (req, res, next) => {
    try {
      const {
        className,
        classID,
        department,
        course,
        classRequire,
        credit,
        details,
      } = req.body;
      const { data } = await service.CreateClass({
        className,
        classID,
        department,
        course,
        classRequire,
        credit,
        details,
      });
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  app.get("/class/getAllClass", async (req, res, next) => {
    try {
      const data = await service.GetAllClass();
      return res.status(200).json(data);
    } catch (error) {
      res.json(error);
    }
  });
  app.get("/class/getClassByID", async (req, res, next) => {
    try {
      const { id } = req.query;
      const data = await service.GetClassByID({ id });
      return res.status(200).json(data);
    } catch (error) {
      res.json(error);
    }
  });
  app.get("/class/getClassByClassID", async (req, res, next) => {
    try {
      const { classID } = req.query;
      const data = await service.GetClassByClassID({ classID });
      return res.status(200).json(data);
    } catch (error) {
      res.json(error);
    }
  });
  //--------------------------------------------------------------------------------//
  app.post("/class/create-class-details", async (req, res, next) => {
    try {
      const { classID, detailsID, studentID, classified, grade, totalGrade } =
        req.body;
      const { data } = await DetailsService.CreateClassDetails({
        classID,
        detailsID,
        studentID,
        classified,
        grade,
        totalGrade,
      });
      console.log(data)
      if (!data) {
        return res.status(404).json({data:data,message:"Bạn chưa học môn tiên quyết"});
      }
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  app.get("/class/getClassDetailsByDetailsID", async (req, res, next) => {
    try {
      const { detailsID } = req.query;
      const data = await DetailsService.FindClassDetailsByDetailsID({ detailsID });
      return res.status(200).json(data);
    } catch (error) {
      res.json(error);
    }
  });
  app.get("/class/getClassDetailsByStudentID", async (req, res, next) => {
    try {
      const { studentID } = req.query;
      // console.log(req.student)
      console.log("stuid",studentID)
      const data = await DetailsService.FindClassDetailsByStudentID({ studentID });
      return res.status(200).json(data);
    } catch (error) {
      res.json(error);
    }
  });
};
