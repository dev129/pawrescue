const Animal = require("../models/Animal");
const RescueCenter = require("../models/RescueCenter");

exports.createAnimal = async (req, res) => {
  try {
    const { name, description, features, breed } = req.body;
    const rescueCenterId = req.user.userId;

    const rescueCenter = await RescueCenter.findOne({ owner: rescueCenterId });
    if (!rescueCenter) {
      return res
        .status(403)
        .json({ message: "Only rescue centers can add animals." });
    }

    let images = [];
    if (req.files && req.files.length > 0) {
      images = req.files.map((file) => file.path);
    }

    const newAnimal = new Animal({
      name,
      description,
      features,
      breed,
      images,
      createdBy: rescueCenter._id,
    });

    await newAnimal.save();

    res
      .status(201)
      .json({ message: "Animal added successfully", animal: newAnimal });
  } catch (error) {
    console.error("Error creating animal:", error);
    res.status(500).json({ message: "Failed to create animal." });
  }
};

exports.updateAnimal = async (req, res) => {
  try {
    const { animalId } = req.params;
    const rescueCenterId = req.user.userId;
    const { name, description, features, breed } = req.body;

    const rescueCenter = await RescueCenter.findOne({ owner: rescueCenterId });
    if (!rescueCenter) {
      return res
        .status(403)
        .json({ message: "Unauthorized to update animals." });
    }

    const animal = await Animal.findOne({
      _id: animalId,
      createdBy: rescueCenter._id,
    });
    if (!animal) {
      return res
        .status(404)
        .json({ message: "Animal not found or unauthorized update." });
    }

    animal.name = name || animal.name;
    animal.description = description || animal.description;
    animal.features = features || animal.features;
    animal.breed = breed || animal.breed;

    if (req.files && req.files.length > 0) {
      animal.images = req.files.map((file) => file.path);
    }

    await animal.save();

    res.status(200).json({ message: "Animal updated successfully", animal });
  } catch (error) {
    console.error("Error updating animal:", error);
    res.status(500).json({ message: "Failed to update animal." });
  }
};

exports.getAnimalsByRescueCenter = async (req, res) => {
  try {
    const rescueCenterId = req.user.userId;

    const rescueCenter = await RescueCenter.findOne({ owner: rescueCenterId });
    if (!rescueCenter) {
      return res
        .status(403)
        .json({ message: "Unauthorized to access animals." });
    }

    const animals = await Animal.find({ createdBy: rescueCenter._id });

    res.status(200).json({ animals });
  } catch (error) {
    console.error("Error fetching animals:", error);
    res.status(500).json({ message: "Failed to fetch animals." });
  }
};

exports.getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find().populate("createdBy", "name");

    res.status(200).json({ animals });
  } catch (error) {
    console.error("Error fetching animals:", error);
    res.status(500).json({ message: "Failed to fetch animals." });
  }
};

exports.getAnimalById = async (req, res) => {
  try {
    const { animalId } = req.params;

    const animal = await Animal.findById(animalId);
    if (!animal) {
      return res.status(404).json({ message: "Animal not found." });
    }

    res.status(200).json({ animal });
  } catch (error) {
    console.error("Error fetching animal:", error);
    res.status(500).json({ message: "Failed to fetch animal." });
  }
};

exports.deleteAnimal = async (req, res) => {
  try {
    const { animalId } = req.params;
    const rescueCenterId = req.user.userId;

    const rescueCenter = await RescueCenter.findOne({ owner: rescueCenterId });
    if (!rescueCenter) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete animals." });
    }

    const animal = await Animal.findOneAndDelete({
      _id: animalId,
      createdBy: rescueCenter._id,
    });

    if (!animal) {
      return res
        .status(404)
        .json({ message: "Animal not found or unauthorized delete." });
    }

    res.status(200).json({ message: "Animal deleted successfully" });
  } catch (error) {
    console.error("Error deleting animal:", error);
    res.status(500).json({ message: "Failed to delete animal." });
  }
};
