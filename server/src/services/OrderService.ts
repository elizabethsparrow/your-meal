import { Request } from "express";
import { OrderModel } from "../models";

class OrderService {
  async getAllOrders() {
    const result = await OrderModel.findMany({
      include: { product_order: true },
    });
    return result;
  }

  async createAllOrder(req: Request) {
    interface IProductOrder {
      productId: number;
      count: number;
    }
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
        product_order: {
          create: productData,
        },
      },
      include: {
        product_order: true,
      },
    });
    return result;
  }
}

export default new OrderService();
