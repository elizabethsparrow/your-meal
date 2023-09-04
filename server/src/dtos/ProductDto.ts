import { IProduct, IProductCreate } from "../types";

export class ProductDTO {
  id;
  name;
  description;
  category;

  constructor(options: IProduct | IProductCreate) {
    this.id = options.id;
    this.name = options.name;
    this.description = options.description;
    this.category = options.category;
  }
}
