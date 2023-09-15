import { Request } from "express";
import { OrderModel } from "../models";
import { IProductOrder } from "../types/ProductOrderTypes";

class OrderService {
  async getAllOrders() {
    const result = await OrderModel.findMany({
      include: { productOrder: true },
    });
    return result;
  }

  async createAllOrder(req: Request) {
    interface IOrderRequestBody {
      product_orders: IProductOrder[];
    }

    const bodyData: IOrderRequestBody = req.body;
    const productData: any = [];
    if (bodyData) {
      bodyData.product_orders.forEach((productOrder) => {
        productData.push({
          productId: productOrder.productId,
          count: productOrder.count,
        });
      });
    }
    const dateNow = new Date(Date.now()).toISOString();

    const result = await OrderModel.create({
      data: {
        create_date: dateNow,
        productOrder: {
          create: productData,
        },
      },
      include: {
        productOrder: true,
      },
    });
    return result;
  }
}

export default new OrderService();
