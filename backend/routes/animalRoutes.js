const express = require("express");
const {
  createAnimal,
  getAnimalsByRescueCenter,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
  getAllAnimals,
} = require("../controllers/animalController");
const upload = require("../middleware/multerMiddleware");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post(
  "/create",
  authMiddleware(["user"]),
  upload.array("images"),
  createAnimal
);
router.get(
  "/rescue-center",
  authMiddleware(["rescue_center"]),
  getAnimalsByRescueCenter
);
router.get("/", getAllAnimals);
router.get("/:animalId", getAnimalById);
router.put(
  "/:animalId",
  authMiddleware(["rescue_center"]),
  upload.array("images"),
  updateAnimal
);
router.delete("/:animalId", authMiddleware(["rescue_center"]), deleteAnimal);

module.exports = router;
