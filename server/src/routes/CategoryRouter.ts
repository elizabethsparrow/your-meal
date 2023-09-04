import { Router } from "express";
import { CategoryController } from "../controllers";

const CategoryRouter = Router();

CategoryRouter.post("", CategoryController.createCategory);

export default CategoryRouter;
