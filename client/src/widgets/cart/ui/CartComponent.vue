<script setup lang="ts">
import { type ICartProduct, useCartStore } from '@/entities/cart'
import { CartProductCard } from '../index'
import { computed, toRefs } from 'vue'

const { cart } = toRefs(useCartStore()),
  { deleteProductFromCart } = useCartStore()

const productsCount = computed(() =>
  cart.value.reduce((acc: number, curr: ICartProduct) => (curr.count ? acc + curr.count : acc), 0)
)

const productTotalCost = computed(() => {
  const reduceCallback = (acc: number, curr: ICartProduct) =>
    curr.product?.cost ? acc + curr.product.cost * curr.count : acc
  return cart.value.reduce(reduceCallback, 0)
})
</script>

<template>
  <div class="cart-component">
    <div class="cart-component__container">
      <div class="cart-component__header">
        <h2 class="cart-component__header-titile">Корзина</h2>
        <span class="cart-component__header-count">{{ productsCount }}</span>
      </div>
      <div class="cart-component__content">
        <p v-if="cart.length <= 0">Тут пока пусто :(</p>
        <cart-product-card
          @delete="() => deleteProductFromCart(product.product.id)"
          class="cart-component__product-card"
          v-for="product in cart"
          :key="product.product.id"
          v-model:count="product.count"
          :cart-product="product"
        />
      </div>
      <div class="cart-component__total-cost-block" v-if="productTotalCost > 0">
        <p class="total-cost-block__title">Итого</p>
        <p class="total-cost-block__cost-value">{{ productTotalCost }}₽</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-component {
  @apply h-fit bg-white rounded-xl py-6 px-4;

  &__container {
  }

  &__product-card {
    @apply py-4 border-t border-gray-100;

    &:last-child {
      @apply py-4 border-t border-b border-gray-100;
    }
  }

  &__header {
    @apply flex items-center justify-between pb-3;
  }

  &__header-titile {
  }

  &__header-count {
    @apply block py-0.5 px-4 bg-gray-200 rounded-lg;
  }

  &__total-cost-block {
    @apply flex justify-between items-center py-4;
  }
}
</style>
