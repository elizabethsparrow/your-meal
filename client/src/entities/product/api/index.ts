import { useAxios } from '@/shared/api'
import type { IProduct } from '..'

export class ProductAPI {
  static getAllProducts(): Promise<IProduct[]> {
    return useAxios.get('/products')
  }
  static getProductsByCategoryId(categoryId: number): Promise<IProduct[]> {
    return useAxios.get(`products/category?categoryId=${categoryId}`)
  }
}
