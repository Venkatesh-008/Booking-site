// models/Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  numberOfPersons: { type: Number, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  arrivalDate: { type: Date, required: true },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
