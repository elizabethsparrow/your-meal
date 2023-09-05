"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class CategoryService {
    createCategory(categoryData) {
        return models_1.CategoryModel.create({ data: categoryData });
    }
    getCategories() {
        return models_1.CategoryModel.findMany();
    }
}
exports.default = new CategoryService();
