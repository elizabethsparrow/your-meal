import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services";

class ProductController {
  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    const products = await ProductService.getAllProducts();
    res.send(products);
  }
  async createProduct(req: Request, res: Response, next: NextFunction) {
    let { name, description, cost, weight } = req.body;
    const product = await ProductService.createNewProduct(
      { name, description, cost: +cost, weight: +weight },
      +req.body?.categoryId,
      // @ts-ignore
      req.files?.cover
    );
    res.send(product);
  }
}

export default new ProductController();
