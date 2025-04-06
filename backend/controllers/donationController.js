const Razorpay = require("razorpay");
const Donation = require("../models/Donation");
const Animal = require("../models/Animal");

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

exports.createDonationOrder = async (req, res) => {
  try {
    const { amount, animalId } = req.body;
    const userId = req.user.userId;

    if (!amount || !animalId) {
      return res
        .status(400)
        .json({ message: "Amount and animalId are required" });
    }

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `donation_${Date.now()}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    console.error("Error creating donation order:", error);
    res.status(500).json({ message: "Failed to create donation order" });
  }
};

exports.captureDonation = async (req, res) => {
  try {
    const { animalId, amount, transactionId, razorpayDetails } = req.body;
    const userId = req.user.userId;

    if (!animalId || !amount || !transactionId || !razorpayDetails) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const animal = await Animal.findById(animalId);
    if (!animal) {
      return res.status(404).json({ message: "Animal not found" });
    }

    const donation = new Donation({
      userId,
      animalId,
      amount,
      transactionId,
      razorpayDetails,
    });

    await donation.save();

    res.status(201).json({ message: "Donation successful", donation });
  } catch (error) {
    console.error("Error capturing donation:", error);
    res.status(500).json({ message: "Failed to process donation" });
  }
};

exports.getUserDonations = async (req, res) => {
  try {
    const userId = req.user.userId;

    const donations = await Donation.find({ userId })
      .populate("animalId", "name breed")
      .sort({ createdAt: -1 });

    res
      .status(200)
      .json({ message: "User donations fetched successfully", donations });
  } catch (error) {
    console.error("Error fetching user donations:", error);
    res.status(500).json({ message: "Failed to fetch donation history" });
  }
};

exports.getRescueCenterDonations = async (req, res) => {
  try {
    const rescueCenterId = req.user.userId;

    const animals = await Animal.find({ createdBy: rescueCenterId }).select(
      "_id"
    );
    const animalIds = animals.map((animal) => animal._id);

    const donations = await Donation.find({ animalId: { $in: animalIds } })
      .populate("animalId", "name breed")
      .populate("userId", "name email contact")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "Rescue center donations fetched successfully",
      donations,
    });
  } catch (error) {
    console.error("Error fetching rescue center donations:", error);
    res.status(500).json({ message: "Failed to fetch donations" });
  }
};
