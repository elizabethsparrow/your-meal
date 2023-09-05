"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDTO = void 0;
class ProductDTO {
    constructor(options) {
        this.id = options.id;
        this.name = options.name;
        this.description = options.description;
        this.category = options.category;
        this.cover = options.cover;
    }
}
exports.ProductDTO = ProductDTO;
