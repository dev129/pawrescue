const Adoption = require("../models/Adoption");
const Animal = require("../models/Animal");

exports.createAdoptionRequest = async (req, res) => {
  try {
    const { animalId } = req.body;
    const userId = req.user.userId;

    const animal = await Animal.findById(animalId);
    if (!animal) {
      return res.status(404).json({ message: "Animal not found." });
    }

    const existingRequest = await Adoption.findOne({ userId, animalId });
    if (existingRequest) {
      return res
        .status(400)
        .json({ message: "Adoption request already submitted." });
    }

    const newAdoption = new Adoption({
      userId,
      animalId,
      status: "Pending",
    });

    await newAdoption.save();

    res.status(201).json({
      message: "Adoption request submitted successfully",
      adoption: newAdoption,
    });
  } catch (error) {
    console.error("Error creating adoption request:", error);
    res.status(500).json({ message: "Failed to submit adoption request." });
  }
};

exports.updateAdoptionStatus = async (req, res) => {
  try {
    const { adoptionId } = req.params;
    const { status } = req.body;
    const rescueCenterId = req.user.userId;

    const adoption = await Adoption.findById(adoptionId).populate("animalId");
    if (!adoption) {
      return res.status(404).json({ message: "Adoption request not found." });
    }

    const animal = await Animal.findById(adoption.animalId);
    if (!animal || !animal.createdBy.equals(rescueCenterId)) {
      return res
        .status(403)
        .json({ message: "Unauthorized to update this adoption request." });
    }

    adoption.status = status;
    await adoption.save();

    res
      .status(200)
      .json({ message: "Adoption status updated successfully", adoption });
  } catch (error) {
    console.error("Error updating adoption status:", error);
    res.status(500).json({ message: "Failed to update adoption status." });
  }
};

exports.getUserAdoptionRequests = async (req, res) => {
  try {
    const userId = req.user.userId;

    const adoptions = await Adoption.find({ userId })
      .populate("animalId", "name breed")
      .populate("userId", "name email");

    res
      .status(200)
      .json({ message: "Adoption requests fetched successfully", adoptions });
  } catch (error) {
    console.error("Error fetching user adoption requests:", error);
    res.status(500).json({ message: "Failed to fetch adoption requests." });
  }
};

exports.getRescueCenterAdoptionRequests = async (req, res) => {
  try {
    const rescueCenterId = req.user.userId;

    const animals = await Animal.find({ createdBy: rescueCenterId }).select(
      "_id"
    );
    const animalIds = animals.map((animal) => animal._id);

    const adoptions = await Adoption.find({ animalId: { $in: animalIds } })
      .populate("animalId", "name breed")
      .populate("userId", "name email contact");

    res.status(200).json({
      message: "Rescue center adoption requests fetched successfully",
      adoptions,
    });
  } catch (error) {
    console.error("Error fetching rescue center adoption requests:", error);
    res.status(500).json({ message: "Failed to fetch adoption requests." });
  }
};
