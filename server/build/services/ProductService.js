"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const dtos_1 = require("../dtos");
class ProductService {
    async getAllProducts() {
        const result = await models_1.ProductModel.findMany({
            include: { category: true },
        });
        return result.map((el) => new dtos_1.ProductDTO(el));
    }
    async createNewProduct(productData, categoryId) {
        let product;
        if (categoryId) {
            product = {
                ...productData,
                category: { connect: { id: categoryId } },
            };
        }
        else {
            product = productData;
        }
        const result = await models_1.ProductModel.create({
            data: product,
            include: {
                category: true,
            },
        });
        console.log(result);
        return new dtos_1.ProductDTO(result);
    }
}
exports.default = new ProductService();
