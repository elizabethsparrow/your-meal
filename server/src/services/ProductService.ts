import { Prisma } from "@prisma/client";
import { ProductModel } from "../models";
import { IProduct, IProductCreate } from "../types";
import { ProductDTO } from "../dtos";

class ProductService {
  async getAllProducts() {
    const result: IProduct[] = await ProductModel.findMany({
      include: { category: true },
    });
    return result.map((el) => new ProductDTO(el));
  }

  async createNewProduct(
    productData: Prisma.ProductCreateInput,
    categoryId?: number
  ) {
    let product: Prisma.ProductCreateInput;

    if (categoryId) {
      product = {
        ...productData,
        category: { connect: { id: categoryId } },
      };
    } else {
      product = productData;
    }

    const result: IProduct = await ProductModel.create({
      data: product,
      include: {
        category: true,
      },
    });

    console.log(result);

    return new ProductDTO(result);
  }
}

export default new ProductService();
