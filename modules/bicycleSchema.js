const Joi = require("joi");
const mongoose = require("mongoose");

const Bicycle = mongoose.model(
  "Bicycle",
  new mongoose.Schema({
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    type: {
      type: String,
      required: true,
    },
    rentPrice: {
      type: Number,
      required: true,
      min: 1,
      max: 99999,
    },
    rented: {
      type: Boolean,
      required: true,
    },
    rentedTime: {
      type: Number,
      required: true,
    },
    isRentChanged: {
      type: Boolean,
      required: true,
    },
  })
);

function validateBicycle(bicycle) {
  const schema = {
    id: Joi.string().required(),
    name: Joi.string().min(5).max(50).required(),
    type: Joi.string().required(),
    rentPrice: Joi.number().min(1).max(99999),
    rented: Joi.boolean().required(),
    rentedTime: Joi.number().required(),
    isRentChanged: Joi.boolean().required(),
  };

  return Joi.validate(bicycle, schema);
}

module.exports.Bicycle = Bicycle;
module.exports.validate = validateBicycle;
