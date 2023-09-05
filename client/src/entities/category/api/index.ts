import { useAxios } from '@/shared/api'

export class CategoryAPI {
  static getCategories() {
    return useAxios.get('/categories')
  }
}
