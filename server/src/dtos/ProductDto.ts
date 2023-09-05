import { IProduct, IProductCreate } from "../types";

export class ProductDTO {
  id?: number;
  name;
  description;
  category;
  cover;
  weight;
  cost;

  constructor(options: IProduct) {
    this.id = options.id;
    this.name = options.name;
    this.description = options.description;
    this.category = options.category;
    this.cover = options.cover;
    this.weight = options.weight;
    this.cost = options.cost;
  }
}
