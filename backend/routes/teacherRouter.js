const express = require("express");
const router = express.Router();

const {
  addTeacher,
  getAllTeachers,
  searchTeachers,
  subjectsOfTeacher,
  removeTeacher,
} = require("../controllers/teacherController");

// isme body mai subName jayega jisko add krna
router.post("/", addTeacher);
router.get("/", getAllTeachers);
router.post("/subjectsOfTeacher", subjectsOfTeacher); // teacher konse konse subjects pdata hai
router.post("/remove", removeTeacher);
module.exports = router;
