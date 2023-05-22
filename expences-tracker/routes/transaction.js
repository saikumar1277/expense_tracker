const express = require("express");
const route = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require("../controllers/transactions");

route.route("/").get(getTransactions).post(addTransactions);

route.route("/:id").delete(deleteTransactions);

module.exports = route;
