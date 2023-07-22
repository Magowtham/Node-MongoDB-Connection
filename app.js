//importing the express package
const express = require("express");
//importing mongoose package
const mongoose = require("mongoose");
//importing the sub router
const studentRouter = require("./Routes/student");

const app = express();
app.use(express.json());
//specifying the studentRouter as middleware in the app
app.use("/student", studentRouter);
//specifying url of the mogodb
const url = "mongodb://localhost:27017/AttBot";
//connecting node js to mongodb
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((e) => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(`An error occured while connecting to db ${err}`);
  });

//declared port number to start node js
const serverPort = 9000;
//starting server by linstening the specified port number
app.listen(serverPort, () => {
  console.log(`Server started at : ${serverPort}`);
});
