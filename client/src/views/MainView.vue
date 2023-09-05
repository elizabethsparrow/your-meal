<script setup lang="ts">
import { CategoriesBar } from '@/features/categories-bar'
import { ProductCard, ProductAPI, type IProduct } from '@/entities/product'
import { ref, watch, type Ref } from 'vue'
import type { ICategory } from '@/entities/category'

const products = ref<IProduct[]>([]),
  mainCategory: Ref<ICategory | null> = ref(null)

watch(
  () => mainCategory.value,
  async () => {
    if (mainCategory.value) {
      const result = await ProductAPI.getProductsByCategoryId(mainCategory.value.id)
      products.value = result
    }
  }
)
</script>

<template>
  <div class="main-view">
    <div class="main-view__container">
      <categories-bar @change-main-category="(value) => (mainCategory = value)" />
      <div class="main-view__content">
        <div class="main-view__cart"></div>
        <div class="main-view__right-part">
          <h1 v-if="mainCategory" class="right-part__title">{{ mainCategory.name }}</h1>
          <div class="main-view__product-list">
            <product-card
              class="product-list__product-card"
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
            <p v-if="products.length <= 0">Товары не найдены</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-view {
  &__container {
    width: 95%;
    margin: auto;
  }

  &__content {
    @apply flex;
  }

  &__cart {
    width: 30%;
  }

  &__right-part {
    max-width: 70%;

    .right-part__title {
      @apply mb-6 mt-[50px];
    }
  }

  &__product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
