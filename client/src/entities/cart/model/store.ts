import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ICartProduct } from '../index'

export const useCartStore = defineStore('cart-store', () => {
  const cart = ref<ICartProduct[]>([
    {
      product: {
        id: 1,
        name: 'Супер сырный',
        description: 'descr',
        categoryId: 1,
        cover: '/products-covers/61839a5e-347f-4655-8632-5bb685f36cf8photo2.png',
        weight: 512,
        cost: 550,
        kilocalory: null,
        ingredients: null
      },
      count: 1
    }
  ])

  const addProductToCart = (product: ICartProduct) => {
    cart.value.push(product)
  }

  return { cart, addProductToCart }
})
