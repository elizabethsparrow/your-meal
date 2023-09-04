import { Router } from "express";
import ProductRouter from "./ProductRouter";
import CategoryRouter from "./CategoryRouter";

const router = Router();

router.use("/products", ProductRouter);
router.use("/categories", CategoryRouter);

export default router;
