const Product = require("../models/Product.model");

exports.test = function (rep, res) {
  res.send("Hello from controllers");
};

//Operation 1: Create
exports.productCreate = function (req, res) {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    date: req.body.date,
  });

  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send("Đã tạo thành công sản phẩm mới");
  });
};

//Operation 2: Read
exports.productDetails = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

//Operation 3: Update
exports.productUpdate = function (req, res) {
  Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, product) {
      if (err) return next(err);
      res.send("Đã cập nhật sản phẩm thành công");
    }
  );
};

//Operation 4: Delete
exports.productDelete = function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send("Đã xóa sản phẩm thành công");
  });
};
