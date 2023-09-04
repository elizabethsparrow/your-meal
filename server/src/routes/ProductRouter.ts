import { Router } from "express";
import { ProductController } from "../controllers";

const ProductRouter = Router();

ProductRouter.get("", ProductController.getAllProducts);
ProductRouter.post("", ProductController.createProduct);

export default ProductRouter;
