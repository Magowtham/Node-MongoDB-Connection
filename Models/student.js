const mongoose = require("mongoose");

//specifying the student schema
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  usn: {
    type: String,
    required: true,
  },
});
//exporting the schema
module.exports = mongoose.model("Student", StudentSchema);
