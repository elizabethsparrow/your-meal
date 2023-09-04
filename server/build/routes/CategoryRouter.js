"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const CategoryRouter = (0, express_1.Router)();
CategoryRouter.get("", controllers_1.CategoryController.getCategories);
CategoryRouter.post("", controllers_1.CategoryController.createCategory);
exports.default = CategoryRouter;
