const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Bicycle } = require("../modules/bicycleSchema");

mongoose.set("useFindAndModify", false);

router.delete("/:id", async (req, res) => {
  const bicycle = await Bicycle.find({ id: req.params.id }).deleteOne();

  res.send(bicycle);
});

module.exports = router;
