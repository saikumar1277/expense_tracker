const express = require("express");
const route = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require("../controllers/transactions");

route.route("/").post(getTransactions);
route.route("/add-transcation").post(addTransactions);

route.route("/:id").delete(deleteTransactions);

module.exports = route;
