export interface ICategory {
  id: number;
  name?: string;
}

export interface ICategoryCreate extends Omit<ICategory, "id"> {}
