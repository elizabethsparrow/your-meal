import { ICategory, IProduct, IProductCreate } from "../types";

export class ProductDTO {
  id?: number;
  name: string;
  description: string;
  category?: ICategory | null;
  cover?: string | null;
  weight?: number | null;
  cost?: number | null;
  kilocalory?: number | null;
  ingredients?: string | null;

  constructor(options: IProduct) {
    this.id = options.id;
    this.name = options.name;
    this.description = options.description;
    this.category = options.category;
    this.cover = options.cover;
    this.weight = options.weight;
    this.cost = options.cost;
    this.kilocalory = options.kilocalory;
    this.ingredients = options.ingredients;
  }
}
