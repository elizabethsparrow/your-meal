<script setup lang="ts">
import { CategoryTag } from './index'
import { CategoryAPI, type ICategory } from '@/entities/category'
import { ref } from 'vue'

const categories = ref(),
  mainCategoryId = ref()

const getCategoryById = (id: number) => categories.value.find((el: ICategory) => el.id === id)

const onLoad = async () => {
  categories.value = await CategoryAPI.getCategories()
  mainCategoryId.value = categories.value[0]?.id
  emit('change-main-category', categories.value[0])
}
const onClickCategoryTag = (id: number) => {
  mainCategoryId.value = id
  emit('change-main-category', getCategoryById(id))
}

onLoad()

const emit = defineEmits(['change-main-category'])
</script>

<template>
  <div class="categories-bar">
    <category-tag
      v-for="category in categories"
      :category="category"
      :is-active="mainCategoryId == category.id"
      @click="onClickCategoryTag(category.id)"
    />
  </div>
</template>

<style lang="scss" scoped>
.categories-bar {
  @apply flex gap-6;
}
</style>
