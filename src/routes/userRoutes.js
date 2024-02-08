const express = require("express");

const User = require("../models/users.model");
const router = express.Router();

router.post("/api", async (req, res) => {
  const { name, city, email, phoneNumber, platform, state } = req.body;

  try {
    const userAdded = await User.create({
      name: name,
      platform: platform,
      city: city,
      email: email,
      phoneNumber: phoneNumber,
      state: state,
    });
    res.status(400).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(201).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();

    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const singleUser = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, city, platform, phoneNumber, state } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
