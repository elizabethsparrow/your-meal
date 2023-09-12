import { Router } from "express";
import { CategoryController } from "../controllers";

const CategoryRouter = Router();

CategoryRouter.get("", CategoryController.getCategories);
CategoryRouter.post("", CategoryController.createCategory);

export default CategoryRouter;
