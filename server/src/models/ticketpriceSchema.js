const mongoose = require("mongoose");

const ticketPriceSchema = new mongoose.Schema({
  adultPrice: {
    type: Number, // Use Number type for prices
    required: true,
  },
  childrenPrice: {
    type: Number, // Use Number type for prices
    required: true,
  },
  foreignerPrice: {
    type: Number, // Use Number type for prices
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const Price = mongoose.model("Price", ticketPriceSchema);
module.exports = Price;