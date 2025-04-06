const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: String,
  role: {
    type: String,
    enum: ["admin", "user", "rescue_center"],
    default: "user",
  },
  status: {
    type: String,
    enum: ["pending", "suspended", "active"],
    default: "pending",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
