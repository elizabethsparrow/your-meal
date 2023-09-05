<script setup lang="ts">
import { CategoriesBar } from '@/features/categories-bar'
import { ProductCard, ProductAPI, type IProduct } from '@/entities/product'
import { ref } from 'vue'

const products = ref<IProduct[]>([])

ProductAPI.getAllProducts().then((result: IProduct[]) => {
  products.value = result
})
</script>

<template>
  <div class="main-view">
    <categories-bar />
    <product-card v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style lang="scss" scoped></style>
