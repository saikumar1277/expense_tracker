const Transcation = require("../models/Transcation");
//@desc  : to get transaction
//route  : /api/v1/transaction
//access : public

exports.getTransactions = async (req, res, next) => {
  try {
    // const userId = JSON.parse(localStorage.getItem("user"))["_id"];
    const transactions = await Transcation.find({
      userid: req.body.userid,
    });
    console.log(transactions);
    return res.status(201).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};

//@desc  : to add the transaction
//route  : /api/v1/transaction
//access : public
exports.addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transcation.create(req.body);
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      const message = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: true,
        error: message,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "server error",
      });
    }
  }
};

//@desc  : to delete the transaction
//route  : /api/v1/transaction/:id
//access : public
exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transcation.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "transactin not found",
      });
    } else {
      await Transcation.findByIdAndRemove(req.params.id);
      return res.status(201).json({
        success: true,
        data: transaction,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};
