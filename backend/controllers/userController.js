const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const RescueCenter = require("../models/RescueCenter");
require("dotenv").config();

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, contact, role } = req.body;
    let rescueCenterDetails;

    if (role === "rescue_center") {
      rescueCenterDetails = JSON.parse(req.body.rescueCenterDetails);
    }

    if (!name || !email || !password || !contact || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      contact,
      role,
    });

    await newUser.save();

    let rescueCenter = null;

    if (role === "rescue_center") {
      if (
        !rescueCenterDetails ||
        !rescueCenterDetails.name ||
        !rescueCenterDetails.reg_num
      ) {
        return res
          .status(400)
          .json({ message: "Rescue center details are required" });
      }

      if (!req.files || !req.files.form_12a || !req.files.form_13a) {
        return res
          .status(400)
          .json({ message: "Both Form 12A and Form 13A images are required" });
      }

      const form_12a_path = req.files.form_12a[0].path;
      const form_13a_path = req.files.form_13a[0].path;

      rescueCenter = new RescueCenter({
        ...rescueCenterDetails,
        owner: newUser._id,
        form_12a: form_12a_path,
        form_13a: form_13a_path,
      });

      await rescueCenter.save();
    }

    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "4h" }
    );

    res.json({
      message: "User created successfully",
      user: newUser,
      rescueCenter,
      token,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Failed to register user." });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      message: "All users fetched successfully",
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const matchedPassword = await bcrypt.compare(password, user.password);
    if (!matchedPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "4h" }
    );

    res.json({ token, role: user.role });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Failed to Login. Please try again." });
  }
};

exports.updateAccountStatus = async (req, res) => {
  try {
    const { userId, status } = req.body;

    if (!userId || !["pending", "suspended", "active"].includes(status)) {
      return res.status(400).json({ message: "Invalid status or user ID" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { status },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User status updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user status:", error);
    res.status(500).json({ message: "Failed to update user status." });
  }
};
