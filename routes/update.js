const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Bicycle } = require("../modules/bicycleSchema");

mongoose.set("useFindAndModify", false);

router.put("/:id", async (req, res) => {
  const bicycle = await Bicycle.findOneAndUpdate(
    { id: req.params.id },
    {
      id: req.body.id,
      name: req.body.name,
      type: req.body.type,
      rentPrice: req.body.rentPrice,
      rented: req.body.rented,
      isRentChanged: req.body.isRentChanged,
    }
  );

  res.send(bicycle);
});

module.exports = router;
