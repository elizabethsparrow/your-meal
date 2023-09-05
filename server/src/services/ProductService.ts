import { Prisma } from "@prisma/client";
import { ProductModel } from "../models";
import { IProduct, IProductCreate } from "../types";
import { ProductDTO } from "../dtos";
import { UploadedFile } from "express-fileupload";
import path from "path";
import { v4 } from "uuid";

class ProductService {
  async getAllProducts() {
    const result: IProduct[] = await ProductModel.findMany({
      include: { category: true },
    });
    return result.map((el) => new ProductDTO(el));
  }

  async getProductsByCategoryId(ctegoryId: number) {
    let products = await ProductModel.findMany({
      where: { category: { id: ctegoryId } },
    });
    return products;
  }

  async createNewProduct(
    productData: IProductCreate,
    categoryId?: number,
    cover?: UploadedFile | undefined
  ) {
    let product: Prisma.ProductCreateInput;
    let coverFileName;
    product = { ...productData, category: undefined };

    if (cover) {
      coverFileName = v4() + cover.name;
      let coverPath = path.join(
        __dirname,
        "../static",
        "products-covers",
        coverFileName
      );
      await cover?.mv(coverPath);
    }
    if (categoryId) {
      product.category = { connect: { id: categoryId } };
    }
    if (coverFileName != null) {
      product.cover = "/products-covers/" + coverFileName;
    }

    const result: IProduct = await ProductModel.create({
      data: product,
      include: {
        category: true,
      },
    });

    return { ...new ProductDTO(result) };
  }
}

export default new ProductService();
