<script setup lang="ts">
import { CategoriesBar } from '@/features/categories-bar'
import { ProductCard, ProductAPI, type IProduct } from '@/entities/product'
import { ref, watch, type Ref } from 'vue'
import { BaseButton, EnumButtonStyles } from '@/shared/ui-kit'
import type { ICategory } from '@/entities/category'
import { ProductPopup } from '@/features/product-popup'
import MainPageLayout from '@/layouts/MainPageLayout.vue'
import { CartComponent } from '@/widgets/cart'

const products = ref<IProduct[]>([]),
  mainCategory: Ref<ICategory | null> = ref(null),
  refProductPopup = ref()

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
  <main-page-layout>
    <div class="main-view">
      <div class="main-view__container">
        <product-popup ref="refProductPopup" class="top-0 left-0" />
        <categories-bar @change-main-category="(value) => (mainCategory = value)" />
        <div class="main-view__content">
          <cart-component class="main-view__cart"></cart-component>
          <div class="main-view__right-part">
            <h1 v-if="mainCategory" class="right-part__title">{{ mainCategory.name }}</h1>
            <div class="main-view__product-list">
              <product-card
                class="product-list__product-card"
                v-for="product in products"
                :key="product.id"
                :product="product"
              >
                <template #button-slot>
                  <base-button
                    @click="refProductPopup.open(product)"
                    :button-style="EnumButtonStyles.secondary"
                  >
                    Добавить
                  </base-button>
                </template>
              </product-card>
              <p v-if="products.length <= 0">Товары не найдены</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-page-layout>
</template>

<style lang="scss" scoped>
.main-view {
  &__container {
    width: 95%;
    margin: auto;
  }

  &__content {
    @apply flex gap-8;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &__cart {
    width: 30%;
  }

  &__right-part {
    max-width: 70%;
    @media (max-width: 768px) {
      max-width: 100%;
    }

    .right-part__title {
      @apply mb-6 mt-[50px];
    }
  }

  &__product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 320px) {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
}
</style>
