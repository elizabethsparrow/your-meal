<script setup lang="ts">
import { type IProduct } from '../../index'
import { getMainServerUrl } from '../../../../shared/lib/helpers'

defineProps<{ product: IProduct }>()
</script>

<template>
  <div class="product-card">
    <div class="product-card__container">
      <div class="product-card__cover">
        <img
          class="cover__image"
          v-if="product.cover != null"
          :src="getMainServerUrl() + product.cover"
          alt=""
        />
        <img src="/default-product.png" class="cover__image" v-else />
      </div>

      <p class="product-card__cost">{{ product.cost }}₽</p>
      <p class="product-card__name">
        {{ product.name }}
      </p>
      <p class="product-card__weight">{{ product.weight }}г</p>
    </div>
    <slot name="button-slot" />
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  @apply flex flex-col justify-between p-3 bg-white rounded-[18px];

  &__container {
    @apply flex flex-col justify-between;
  }

  &__cover {
    overflow: hidden;
    width: 100%;
    height: 220px;
    border-radius: 12px;

    @media (max-width: 1024px) {
      height: 130px;
    }

    .cover__image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .cover__no-image {
      display: block;
      width: 100%;
      @apply bg-gray-100;
    }
  }

  &__cost {
    @apply mt-4 text-2xl font-semibold;
  }

  &__name {
    @apply mt-2;
  }

  &__weight {
    @apply mt-[29px] mb-2 text-gray-400;
  }
}
</style>
