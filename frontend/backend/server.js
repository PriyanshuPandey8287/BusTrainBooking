const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/busbooking")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("🚍 Bus Train Booking API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`✅ Server Running on Port ${PORT}`);
});