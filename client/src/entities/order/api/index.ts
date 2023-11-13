import { useAxios } from '@/shared/api'
import type { ICreateOrder } from '../model'

export class OrderAPI {
  static createOrder(data: ICreateOrder) {
    return useAxios.post('/orders', data)
  }
}
