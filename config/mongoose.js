const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/siakad");
  console.log("The application has connected to the database...");
};
