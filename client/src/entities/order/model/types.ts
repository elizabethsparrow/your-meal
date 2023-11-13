export interface IProductOrder {
  productId: number
  count: number
}

export interface Order {
  id: number
  product_orders: IProductOrder[]
  name: string
  phone?: number | null
  street: string
  house: string
  apartment: string
  floor: string
  intercom?: number
}

export type ICreateOrder = Omit<Order, 'id'>
