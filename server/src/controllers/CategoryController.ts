import { NextFunction, Request, Response } from "express";
import CategoryService from "../services/CategoryService";
import path from "path";
import fs from "fs";
import { UploadedFile } from "express-fileupload";
import { v4 } from "uuid";

class CategoryController {
  async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await CategoryService.createCategory(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      let result = await CategoryService.getCategories();
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new CategoryController();
