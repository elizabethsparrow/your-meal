<script setup lang="ts">
import { type ICartProduct, useCartStore } from '@/entities/cart'
import { CartProductCard } from '../index'
import { computed, ref, toRefs } from 'vue'

const { cart } = toRefs(useCartStore())

const productsCount = computed(() =>
  cart.value.reduce((acc: number, curr: ICartProduct) => (curr.count ? acc + curr.count : acc), 0)
)
</script>

<template>
  <div class="cart-component">
    <div class="cart-component__container">
      <div
        class="cart-component__header"
        :class="{ 'cart-component__header_border': cart.length > 0 }"
      >
        <h2 class="cart-component__header-titile">Корзина</h2>
        <span class="cart-component__header-count">{{ productsCount }}</span>
      </div>
      <div class="cart-component__content">
        <p v-if="cart.length <= 0">Тут пока пусто :(</p>
        <cart-product-card
          v-for="product in cart"
          :key="product.product.id"
          v-model:count="product.count"
          :cart-product="product"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-component {
  @apply h-fit bg-white rounded-xl py-6 px-4;

  &__container {
  }

  &__header {
    @apply flex items-center justify-between pb-3;

    &_border {
      @apply border-b border-gray-100;
    }
  }

  &__header-titile {
  }

  &__header-count {
    @apply block py-0.5 px-4 rounded-md bg-gray-100;
  }
}
</style>
