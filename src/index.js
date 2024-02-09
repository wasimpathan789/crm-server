const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config("");

const userRoutes = require("./routes/userRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const DB_URL = "mongodb://127.0.0.1:27017/crm";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log("Db not Connected"));

// server is listening
app.listen(8000, () => console.log("SErver is listening"));

app.use(userRoutes);
