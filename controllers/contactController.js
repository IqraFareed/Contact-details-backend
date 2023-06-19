const asyncHandler = require("express-async-handler");
// @desc get all contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});

// @desc create contact
// @route POST /api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "create a new  contact" });
});

// @desc update contact
// @route PUT /api/contacts
// @access public

const UpdateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update the contact ${req.params.id}` });
});

// @desc Get contact
// @route GET /api/contacts
// @access public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get ${req.params.id} contacts` });
});

// @desc Delete contact
// @route DELETE /api/contacts
// @access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `deleted ${req.params.id} contact` });
});

module.exports = {
  getContacts,
  createContact,
  UpdateContact,
  getContact,
  deleteContact,
};
