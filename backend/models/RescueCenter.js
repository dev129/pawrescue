const mongoose = require("mongoose");

const rescueCenterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  reg_num: {
    type: String,
    required: true,
  },
  address_line_1: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  facilities: [
    {
      type: String,
      required: true,
    },
  ],
  specializations: [
    {
      type: String,
      required: true,
    },
  ],
  form_12a: {
    type: String,
    required: true,
  },
  form_13a: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("RescueCenter", rescueCenterSchema);
