require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ethers } = require("ethers");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Travel Passport backend is running");
});

app.listen(5000, () => console.log("Server is running on port http://localhost:5000"));
