const { Bicycle, validate } = require("../modules/bicycleSchema");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Send a POST method to this endpoint");
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const bicycle = new Bicycle({
    id: req.body.id,
    name: req.body.name,
    type: req.body.type,
    rentPrice: req.body.rentPrice,
    rented: req.body.rented,
    rentedTime: req.body.rentedTime,
    isRentChanged: req.body.isRentChanged,
  });

  await bicycle.save();

  res.send(bicycle);
});

module.exports = router;
