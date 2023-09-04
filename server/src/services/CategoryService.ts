import { Prisma } from "@prisma/client";
import { CategoryModel } from "../models";
import { ICategoryCreate } from "../types";

class CategoryService {
  async createCategory(categoryData: Prisma.CategoryCreateInput) {
    const result = await CategoryModel.create({ data: categoryData });
    return result;
  }
}

export default new CategoryService();
