"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryService_1 = __importDefault(require("../services/CategoryService"));
class CategoryController {
    async createCategory(req, res, next) {
        try {
            const result = await CategoryService_1.default.createCategory(req.body);
            res.send(result);
        }
        catch (error) {
            next(error);
        }
    }
    async getCategories(req, res, next) {
        try {
            let result = await CategoryService_1.default.getCategories();
            res.send(result);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new CategoryController();
