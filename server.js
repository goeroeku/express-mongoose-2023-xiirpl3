const express = require("express");

const kehadiranRouter = require("./routes/kehadiran");

const mongoose = require("./config/mongoose");
const KehadiranModel = require("./models/kehadiran");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose();

app.use(kehadiranRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
