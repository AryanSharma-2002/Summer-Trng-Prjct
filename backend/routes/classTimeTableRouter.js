const express = require("express");
const router = express.Router();

const {
  addClassEntry,
  getAllTimeSlots,
  removeTimeSlot,
  getIncharge,
  checkTeacherAvailability,
} = require("../controllers/classTimeTableController");

router.post("/checkteacheravail", checkTeacherAvailability);

// isse hum koi bhi time slot entry add kr skte hai time table mai isme classId do, dayName do aur uss time slot entry ki information do yeh add krdega use aur agar pehle se add hai toh use update bhi kr dega
router.post("/", addClassEntry);

// iss function se hme vo sare time slots mil jayenge kisi specific day par entries array mai aur agar hme koi specific time slot ka hi data dekhna vo bhi entries array mai akela mil jayega
// kyo ki agar humne isme tsId di toh uss specific ka info dega entries array mai single element
// {
//     "classId": "636e556fba3ef6e461f63cb2",
//     "dayName": "monday",
//     "tsId": "636d16dfe66d84b6449ba217"
// }
// aur agar tsId nhi di toh uss day mai sare time slots ki info dega entries array mai
// {
//     "classId": "636e556fba3ef6e461f63cb2",
//     "dayName": "monday",
// }
router.post("/getTS", getAllTimeSlots);

// isme classId , day aur time slot do vo wala time slot delete ho jayega database se
router.delete("/removeTS", removeTimeSlot);

router.post("/incharge", getIncharge);
module.exports = router;
