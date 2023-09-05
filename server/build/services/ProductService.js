"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const dtos_1 = require("../dtos");
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
class ProductService {
    async getAllProducts() {
        const result = await models_1.ProductModel.findMany({
            include: { category: true },
        });
        return result.map((el) => new dtos_1.ProductDTO(el));
    }
    async createNewProduct(productData, categoryId, cover) {
        let product;
        let coverFileName;
        product = { ...productData, category: undefined };
        if (cover) {
            coverFileName = (0, uuid_1.v4)() + cover.name;
            let coverPath = path_1.default.join(__dirname, "../static", "products-covers", coverFileName);
            await cover?.mv(coverPath);
        }
        if (categoryId) {
            product.category = { connect: { id: categoryId } };
        }
        if (coverFileName != null) {
            product.cover = "/products-covers/" + coverFileName;
        }
        const result = await models_1.ProductModel.create({
            data: product,
            include: {
                category: true,
            },
        });
        return { ...new dtos_1.ProductDTO(result) };
    }
}
exports.default = new ProductService();
