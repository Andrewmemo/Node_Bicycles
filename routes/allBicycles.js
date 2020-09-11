const express = require("express");
const router = express.Router();

const { Bicycle } = require("../modules/bicycleSchema");

router.get("/", async (req, res) => {
  const allBicycles = await Bicycle.find();

  res.send(allBicycles);
});

module.exports = router;
