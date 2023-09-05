import { type ICategory } from '@/entities/category'

export interface IProduct {
  id: number
  name: string
  description: string
  category?: ICategory | null
  cover?: string | null
  weight?: number | null
  cost?: number | null
}
