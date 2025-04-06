const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticateUser = require("../middleware/auth");
const multerMiddleware = require("../middleware/multerMiddleware");

router.post("/",multerMiddleware.fields([{name:"form_12a",maxCount:1},{name:"form_13a",maxCount:1}]) , userController.registerUser);

router.post("/login", userController.login);

router.get("/", authenticateUser(["admin"]), userController.getAllUsers);

router.put(
  "/",
  authenticateUser(["admin"]),
  userController.updateAccountStatus
);

module.exports = router;
