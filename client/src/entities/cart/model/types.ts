import { type IProduct } from '@/entities/product'

export interface ICartProduct {
  product: IProduct
  count: number
}