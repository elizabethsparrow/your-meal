<script setup lang="ts">
import { type ICartProduct } from '@/entities/cart'
import { getMainServerUrl } from '@/shared/lib/helpers'
import { BaseCounter } from '@/shared/ui-kit'

defineProps<{ cartProduct: ICartProduct; count: number }>()

const emit = defineEmits(['update:count', 'delete'])
</script>

<template>
  <div class="cart-product-card">
    <div class="cart-product-card__container">
      <div class="cart-product-card__cover-block">
        <img
          v-if="cartProduct.product.cover"
          :src="getMainServerUrl() + cartProduct.product.cover"
          alt=""
          class="cart-product-card__cover"
        />
        <img src="/default-product.png" v-else />
      </div>
      <div class="cart-product-card__information-block">
        <p class="cart-product-card__text">
          {{ cartProduct.product.name }}
        </p>
        <p class="cart-product-card__text cart-product-card__text_light mb-2">
          {{ cartProduct.product.weight }} г
        </p>
        <p class="cart-product-card__text">{{ cartProduct.product.cost }}₽</p>
      </div>
      <div class="cart-product-card__count-block">
        <base-counter
          @nullable="() => emit('delete')"
          @update:counter="(val: number) => emit('update:count', val)"
          :counter="cartProduct.count"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-product-card {
  &__container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    gap: 6px;
  }

  &__cover-block {
    width: 100%;
    max-height: 60px;
    height: 100%;
    @apply rounded-lg overflow-hidden;
  }

  &__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__count-block {
    justify-self: end;
  }

  &__text {
    @apply leading-6;

    &_light {
      @apply text-gray-300;
    }
  }
}
</style>
