const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// @desc get all contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json(contact);
});

// @desc create contact
// @route POST /api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber } = req.body;

  if (!name || !email || !phoneNumber) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phoneNumber,
  });
  res.status(201).json(contact);
});

// @desc update contact
// @route PUT /api/contacts
// @access public

const UpdateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(400);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

// @desc Get contact
// @route GET /api/contacts
// @access public

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(400);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// @desc Delete contact
// @route DELETE /api/contacts
// @access public

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(400);
    throw new Error("Contact not found");
  }
  await Contact.deleteOne(contact);
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  UpdateContact,
  getContact,
  deleteContact,
};
