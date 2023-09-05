"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class ProductController {
    async getAllProducts(req, res, next) {
        const products = await services_1.ProductService.getAllProducts();
        res.send(products);
    }
    async getProductsByCategoryId(req, res, next) {
        try {
            if (req.query.categoryId) {
                const result = await services_1.ProductService.getProductsByCategoryId(+req.query.categoryId);
                res.send(result);
            }
        }
        catch (error) {
            next(error);
        }
    }
    async createProduct(req, res, next) {
        let { name, description, cost, weight } = req.body;
        const product = await services_1.ProductService.createNewProduct({ name, description, cost: +cost, weight: +weight }, +req.body?.categoryId, 
        // @ts-ignore
        req.files?.cover);
        res.send(product);
    }
}
exports.default = new ProductController();
