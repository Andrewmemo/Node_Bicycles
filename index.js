const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./startup/db");

const createBicycle = require("./routes/create");
const allBicycles = require("./routes/allBicycles");
const deleteBicycle = require("./routes/delete");
const updateBicycle = require("./routes/update");

db();

app.use(cors());
app.use(bodyParser.json());

app.use("/createBicycle", createBicycle);
app.use("/allBicycles", allBicycles);
app.use("/deleteBicycle", deleteBicycle);
app.use("/updateBicycle", updateBicycle);

app.get("/", (req, res) => {
  res.send("Server is up to running...");
});

app.listen(5000, () => {
  console.log("Listening to port 5000...");
});
