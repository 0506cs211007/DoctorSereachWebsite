const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://akshatrajtomar:2aEFSCarUziD84pj@doctorsereachwebsite.gbwoaqi.mongodb.net/?retryWrites=true&w=majority&appName=doctorSereachWebsite")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("faiiled to connect with database ");
  });

