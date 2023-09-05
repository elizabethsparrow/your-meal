import { Prisma } from "@prisma/client";
import { CategoryModel } from "../models";
import { ICategoryCreate } from "../types";

class CategoryService {
  createCategory(categoryData: Prisma.CategoryCreateInput) {
    return CategoryModel.create({ data: categoryData });
  }

  getCategories() {
    return CategoryModel.findMany();
  }
}

export default new CategoryService();
