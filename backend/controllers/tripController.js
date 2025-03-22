const Trip = require('../models/Trip');

const createTrip = async (req, res) => {
  const { tripName, destination, startDate, endDate, budget } = req.body;
  try {
    const trip = new Trip({ tripName, destination, startDate, endDate, budget, userId: req.userId });
    await trip.save();
    res.status(201).json(trip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.userId });
    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createTrip, getTrips };