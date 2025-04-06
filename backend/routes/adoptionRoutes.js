const express = require("express");
const {
  createAdoptionRequest,
  updateAdoptionStatus,
  getUserAdoptionRequests,
  getRescueCenterAdoptionRequests,
} = require("../controllers/adoptionController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/", authMiddleware(["user"]), createAdoptionRequest);

router.put("/:adoptionId", authMiddleware(["user"]), updateAdoptionStatus);

router.get("/user", authMiddleware(["user"]), getUserAdoptionRequests);

router.get(
  "/rescue-center",
  authMiddleware(["rescue_center"]),
  getRescueCenterAdoptionRequests
);

module.exports = router;
