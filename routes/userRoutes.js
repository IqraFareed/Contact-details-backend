const express = require("express");
const router = express.Router();
const {
  registerUsers,
  loginUser,
  currentUser,
} = require("../controllers/userController");

router.post("/register", registerUsers);
router.post("/login", loginUser);
router.get("/current", currentUser);
module.exports = router;
