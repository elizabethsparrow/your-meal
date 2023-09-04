import { ICategory } from "./CategoryTypes";

export interface IProduct {
  id: number;
  name: string;
  description?: string | null;
  category?: ICategory | null;
}

export interface IProductCreate extends Omit<IProduct, "id | category"> {}
