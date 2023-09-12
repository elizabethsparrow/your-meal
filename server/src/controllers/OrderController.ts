import { NextFunction, Request, Response } from "express";
import { OrderService } from "../services";

class OrderController {
  async getAllOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await OrderService.getAllOrders();
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await OrderService.createAllOrder(req);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new OrderController();
