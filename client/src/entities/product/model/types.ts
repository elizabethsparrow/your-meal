import { type ICategory } from '@/entities/category'

export interface IProduct {
  id: number
  name: string
  description: string
  category?: ICategory | null
  categoryId?: number | null
  cover?: string | null
  weight?: number | null
  cost?: number | null
  kilocalory?: number | null
  ingredients?: string | null
}
