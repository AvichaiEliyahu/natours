const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    _id: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    name: String,
    email: String,
    photo: String,
  },
  tour: {
    _id: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    name: String,
    price: Number,
    duration: Number,
    summary: String,
    imageCover: String,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  paid: {
    type: Boolean,
    default: true,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
