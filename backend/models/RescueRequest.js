const mongoose = require("mongoose");

const rescueRequestSchema = new mongoose.Schema({
  location: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["requested", "rescued", "updated"],
    default: "requested",
  },
  rescueCenterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RescueCenter",
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const RescueRequests = mongoose.model("RescueRequests", rescueRequestSchema);

module.exports = RescueRequests;
