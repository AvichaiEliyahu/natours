const AppError = require('../utils/appError');
const Tour = require('./../models/tourModel');
const Booking = require('./../models/bookingModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const mongoose = require('mongoose');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  const user = req.user;

  const existingBooking = await Booking.findOne({
    'user._id': req.user.id,
    'tour._id': req.params.tourId,
  });

  if (existingBooking) {
    return next(new AppError('You have already booked this tour.', 400));
  }

  const tour = await Tour.findById(req.params.tourId);
  const price = tour.price;
  const booking = await Booking.create({ tour, user, price });

  res.status(200).json({
    status: 'success',
    data: {
      booking,
    },
  });
});

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
