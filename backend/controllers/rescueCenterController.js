const RescueCenter = require("../models/RescueCenter");
const RescueRequests = require("../models/RescueRequest");

exports.getNearestRescueCenters = async (req, res) => {
  try {
    const { pincode } = req.params;

    if (!pincode) {
      return res.status(400).json({ message: "Pincode is required" });
    }

    const rescueCenters = await RescueCenter.find({}).lean();

    if (rescueCenters.length === 0) {
      return res.status(404).json({ message: "No rescue centers found" });
    }


    const sortedCenters = rescueCenters
      .map((center) => ({
        ...center,
        distance: Math.abs(parseInt(center.pincode) - parseInt(pincode)),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);

    res.status(200).json({
      message: "Nearest rescue centers fetched successfully",
      rescueCenters: sortedCenters,
    });
  } catch (error) {
    console.error("Error fetching nearest rescue centers:", error);
    res.status(500).json({ message: "Failed to fetch nearest rescue centers" });
  }
};

exports.createRescueRequest = async (req, res) => {
  try {
    const { location, image, rescueCenterId } = req.body;
    const userId = req.user.id;

    if (!location || !image || !rescueCenterId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newRequest = new RescueRequests({
      location,
      image,
      rescueCenterId,
      createdBy: userId,
    });

    await newRequest.save();
    res
      .status(201)
      .json({ message: "Rescue request created", request: newRequest });
  } catch (error) {
    console.error("Error creating rescue request:", error);
    res.status(500).json({ message: "Failed to create rescue request" });
  }
};

exports.updateRescueRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const userId = req.user.id;
    const { status, image } = req.body;

    const request = await RescueRequests.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: "Rescue request not found" });
    }

    if (request.createdBy.toString() !== userId) {
      return res
        .status(403)
        .json({ message: "Unauthorized to update this request" });
    }

    if (status) request.status = status;
    if (image) request.image = image;

    await request.save();
    res.status(200).json({ message: "Rescue request updated", request });
  } catch (error) {
    console.error("Error updating rescue request:", error);
    res.status(500).json({ message: "Failed to update rescue request" });
  }
};

exports.getUserRescueRequests = async (req, res) => {
  try {
    const userId = req.user.id;

    const requests = await RescueRequests.find({ createdBy: userId });

    res.status(200).json({ message: "User rescue requests fetched", requests });
  } catch (error) {
    console.error("Error fetching user rescue requests:", error);
    res.status(500).json({ message: "Failed to fetch user rescue requests" });
  }
};

exports.getRescueCenterRequests = async (req, res) => {
  try {
    const { rescueCenterId } = req.params;

    const requests = await RescueRequests.find({ rescueCenterId });

    res
      .status(200)
      .json({ message: "Rescue center requests fetched", requests });
  } catch (error) {
    console.error("Error fetching rescue center requests:", error);
    res.status(500).json({ message: "Failed to fetch rescue center requests" });
  }
};
