"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class ProductController {
    async getAllProducts(req, res, next) {
        const products = await services_1.ProductService.getAllProducts();
        res.send(products);
    }
    async createProduct(req, res, next) {
        const product = await services_1.ProductService.createNewProduct(req.body?.product, req.body?.categoryId);
        res.send(product);
    }
}
exports.default = new ProductController();
