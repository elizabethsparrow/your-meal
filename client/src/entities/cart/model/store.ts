import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { ICartProduct } from '../index'

export const useCartStore = defineStore('cart-store', () => {
  const cart = ref<ICartProduct[]>([])

  const addProductToCart = (product: ICartProduct) => {
    const cartProduct = getCartProductById(product.product.id)
    console.log(product)

    if (cartProduct) {
      cartProduct.count = cartProduct.count + product.count
      return
    }
    cart.value.push(product)
  }

  const deleteProductFromCart = (productId: number): void => {
    console.log(productId)

    const result = cart.value.filter((el) => el.product.id != productId)
    cart.value = result
    console.log(result)
  }

  const getCartProductById = (id: number): ICartProduct | null | undefined => {
    return cart.value.find((el) => el.product.id == id)
  }

  const setCartValueToLocalStore = () => {
    const cartStringify = JSON.stringify(cart.value)
    localStorage.cart = cartStringify
  }

  const setCartValueFromLocalStore = () => {
    const cartParse = localStorage.cart ? JSON.parse(localStorage.cart) : null
    if (cartParse) cart.value = cartParse
  }

  if (cart.value.length <= 0) {
    setCartValueFromLocalStore()
  }

  watch(
    () => cart.value,
    () => {
      setCartValueToLocalStore()
    },
    {
      immediate: true,
      deep: true
    }
  )

  return { cart, addProductToCart, getCartProductById, deleteProductFromCart }
})
