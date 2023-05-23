const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
connectDB();
const transcations = require("./routes/transaction");

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}
//transaciion route
app.use("/api/v1/transaction", transcations);

//user route
app.use("/api/v1/users", require("./routes/userRoute"));

app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
