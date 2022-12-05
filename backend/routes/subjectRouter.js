const express = require("express");
const router = express.Router();

const {
  addSubject,
  getAllSubjects,
  searchSubjects,
  removeSubject,
} = require("../controllers/subjectController");

// isme body mai subName jayega jisko add krna
router.post("/", addSubject);
router.get("/", getAllSubjects);
router.get("/search", searchSubjects);
router.delete("/remove", removeSubject);
module.exports = router;
