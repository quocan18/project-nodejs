const express = require("express");
const customer = require("./routes/customer.route");
const dbConfig = "mongodb://localhost:27017/products_info";
const mongoose = require("mongoose");
const app = express();

app.use("/products", customer);

// Connect to the database
mongoose.set("useCreateIndex", true);
mongoose
  .connect(dbConfig, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Kết nối database thành công");
  })
  .catch((err) => {
    console.log("Không thể kết nối đến database", err);
    process.exit();
  });

app.listen(1234, () => {
  console.log("Server đang chạy trên cổng" + port);
});
