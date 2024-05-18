const ClassService = require("../services/ClassService");
const auth = require("./middlewares/auth");
const service = new ClassService();
module.exports = (app) => {
  app.post("/class/create-class", async (req, res, next) => {
    try {
      const {
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
      } = req.body;
      const { result } = await service.RegisterClass({
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
      return res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  app.post("/class/getAllClass", async (req, res, next) => {
    try {

      const { result } = await service.GetAllClass();
      return res.status(200).json(result);
   } catch (error) {
      res.json(error);
    }
  });
};
