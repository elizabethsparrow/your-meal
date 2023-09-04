import { Request, Response } from "express";
import CategoryService from "../services/CategoryService";

class CategoryController {
  async createCategory(req: Request, res: Response) {
    const result = await CategoryService.createCategory(req.body);
    res.send(result);
  }
}

export default new CategoryController();
