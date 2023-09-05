"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const ProductRouter = (0, express_1.Router)();
ProductRouter.get("", controllers_1.ProductController.getAllProducts);
ProductRouter.get("/category", controllers_1.ProductController.getProductsByCategoryId);
ProductRouter.post("", controllers_1.ProductController.createProduct);
exports.default = ProductRouter;
