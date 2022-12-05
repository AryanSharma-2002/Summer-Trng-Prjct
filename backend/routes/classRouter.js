const express = require("express");
const router = express.Router();

const {
  addClass,
  getAllClasses,
  removeClass,
} = require("../controllers/classController");

// isme body mai subName jayega jisko add krna
router.post("/", addClass);
router.get("/", getAllClasses);
router.delete("/remove", removeClass);
module.exports = router;
