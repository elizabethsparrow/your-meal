import { Router } from "express";
import ProductRouter from "./ProductRouter";
import CategoryRouter from "./CategoryRouter";
import OrderRouter from "./OrderRouter";

const router = Router();

router.use("/products", ProductRouter);
router.use("/categories", CategoryRouter);
router.use("/orders", OrderRouter);

export default router;
