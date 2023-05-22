const mongoose = require("mongoose");

const TransactionScheme = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "please add some text"],
  },
  amount: {
    type: Number,
    required: [true, "please add amount"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionScheme);
