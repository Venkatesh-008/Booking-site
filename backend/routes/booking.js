
const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, numberOfPersons, contactNumber, email, arrivalDate } = req.body;

    
    const newBooking = new Booking({
      name,
      numberOfPersons,
      contactNumber,
      email,
      arrivalDate,
    });

    
    await newBooking.save();
    res.status(200).json({ message: "Booking successfully saved!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
