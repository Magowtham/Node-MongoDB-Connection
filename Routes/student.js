const express = require("express");
const StudentSchema = require("../Models/student");
const router = express.Router();
// routs handlers
router.post("/", async (req, res) => {
  console.log(`${index} recieved`);
  //inserting data to mongoDB schema
  const studentData = new StudentSchema({
    name: req.body.name,
    usn: req.body.usn,
  });
  try {
    //saving the data to mongoDB according to the specified schema
    studentData.save();
  } catch (err) {
    console.error(`An error was occured : ${err}`);
  }
});

//exporting the router
module.exports = router;
