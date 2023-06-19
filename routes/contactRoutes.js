const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  UpdateContact,
  getContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(UpdateContact).delete(deleteContact);

module.exports = router;
