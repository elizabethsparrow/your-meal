"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class CategoryService {
    async createCategory(categoryData) {
        const result = await models_1.CategoryModel.create({ data: categoryData });
        return result;
    }
}
exports.default = new CategoryService();
