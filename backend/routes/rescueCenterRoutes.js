const express = require("express");
const {
  getNearestRescueCenters,
  createRescueRequest,
  updateRescueRequest,
  getUserRescueRequests,
  getRescueCenterRequests,
} = require("../controllers/rescueCenterController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/nearest/:pincode", getNearestRescueCenters);

router.post("/request", authMiddleware(["user"]), createRescueRequest);

router.put(
  "/request/:requestId",
  authMiddleware(["user"]),
  updateRescueRequest
);

router.get("/user-requests", authMiddleware(["user"]), getUserRescueRequests);

router.get(
  "/center-requests/:rescueCenterId",
  authMiddleware(["rescue_center"]),
  getRescueCenterRequests
);

module.exports = router;
