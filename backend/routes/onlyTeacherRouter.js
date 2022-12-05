const express = require("express");
const router = express.Router();

const {
  addOnlyTeacher,
  getAllOnlyTeachers,
  searchOnlyTeachers,
  removeOnlyTeacher,
} = require("../controllers/onlyTeacherController");

// isme body mai subName jayega jisko add krna
router.post("/", addOnlyTeacher);
router.get("/", getAllOnlyTeachers);
router.get("/search", searchOnlyTeachers);
router.post("/remove", removeOnlyTeacher);
module.exports = router;
