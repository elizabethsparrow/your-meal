import { Router } from "express";
import { CategoryController } from "../controllers";
import fileupload from "express-fileupload";

const CategoryRouter = Router();

CategoryRouter.get("", CategoryController.getCategories);
CategoryRouter.post("", CategoryController.createCategory);

export default CategoryRouter;
