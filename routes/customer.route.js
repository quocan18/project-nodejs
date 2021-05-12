// File này để định nghĩa cho app
const express = require("express");
const productControllers = require("../controllers/product.controller");
const router = express.Router();

// Require file controllers
const productControllers = require("../controllers/product.controllers");

// Lấy tất cả dữ liệu từ database
router.get("/", async (req, res) => {
  try {
    const doc = await customerModel.GetList();
    res.json(doc);
  } catch (err) {
    res.json({ message: err });
  }
});

//Router của create customer: Thêm customer
router.post("/", async (req, res) => {
  const customer = new Customer({
    full_name: req.body.full_name,
    gender: req.body.gender,
    birthday: req.body.birthday,
    code: req.body.code,
  });
  try {
    const savePost = await customer.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Router của read customer: Xem customer
router.get("/:customerId", async (req, res) => {
  try {
    const post = await customer.findById(req.params.customerId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Router của update customer
router.patch("/:customerId", async (req, res) => {
  try {
    const updateCustomer = await customer.updateOne(
      { _id: req.params.customerId },
      {
        $set: {
          full_name: req.body.full_name,
          gender: req.body.gender,
          birthday: req.body.birthday,
          code: req.body.code,
        },
      }
    );
    res.json(updateCustomer);
  } catch (err) {
    res.json({ message: err });
  }
});

//Router của delete customer
router.delete("/:customerId", async (req, res) => {
  try {
    const removeCustomer = await customer.remove({
      _id: req.params.customerId,
    });
    res.json(removeCustomer);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
