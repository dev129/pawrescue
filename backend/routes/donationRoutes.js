const express = require("express");
const {
  createDonationOrder,
  captureDonation,
  getUserDonations,
  getRescueCenterDonations,
} = require("../controllers/donationController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/order", authMiddleware, createDonationOrder);

router.post("/capture", authMiddleware, captureDonation);

router.get("/user", authMiddleware, getUserDonations);

router.get("/rescue-center", authMiddleware, getRescueCenterDonations);

module.exports = router;
