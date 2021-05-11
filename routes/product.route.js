// File này để định nghĩa cho app
const express = require("express");
const productControllers = require("../controllers/product.controller");
const router = express.Router();

// Require file controllers
const productControllers = require("../controllers/product.controllers");

router.get("/test", productControllers.test);

//Router của create product
router.post("/create", productControllers.productCreate);

// Router của read product
router.get("/:id", productControllers.productDetails);

//Router của update product
router.put("/:id/update", productControllers.productUpdate);

//Router của delete product
router.delete("/:id/delete", productControllers.productDelete);

module.exports = router;
