const StudentService = require("../services/StudentService");
const auth = require("./middlewares/auth");
const service = new StudentService();
module.exports = (app) => {
  app.post("/student/create-student", async (req, res, next) => {
    try {
      const { name, studentID, password, email, department, phoneNumber } =
        req.body;
      const { result } = await service.CreateStudent({
        name,
        studentID,
        password,
        email,
        department,
        phoneNumber,
      });
      return res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  app.post("/student/login", async (req, res, next) => {
    try {
      const { studentID, password } = req.body;
      const { data } = await service.Login({ studentID, password });
      if (data === "data not found") {
        return res.status(404).json(data);
      }
      return res.status(200).json(data);
    } catch (error) {
      res.json(error);
    }
  });
  app.get("/student/profile", auth, async (req, res, next) => {
    try {
      const { _id } = req.student;
      console.log(req.student);
      const { data } = await service.getProfile({ _id });
      // if (data === "data not found") {
        // return res.status(404).json(data);
      // }

      return res.status(200).json(data);
    } catch (error) {
     console.log(error)
    }
  });
};
