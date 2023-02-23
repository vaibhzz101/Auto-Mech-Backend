const express = require("express");
const controller = require("../controllers/products.controller");
const productRouter = express.Router();

productRouter.get("/", controller.getall);
productRouter.get("/filter", controller.filterproducts);
productRouter.get("/:id", controller.getall);

productRouter.post("/add", controller.create);
productRouter.post("/addAllProduct", controller.addAllProduct);
productRouter.patch("/update/:id", controller.update);
productRouter.delete("/delete/:id", controller.delete);

module.exports = {
    productRouter }
