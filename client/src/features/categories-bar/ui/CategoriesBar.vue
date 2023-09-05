<script setup lang="ts">
import { CategoryTag } from './index'
import { CategoryAPI } from '@/entities/category'
import { ref } from 'vue'

const categories = ref(),
  mainCategoryId = ref()

const onLoad = async () => {
  categories.value = await CategoryAPI.getCategories()
  mainCategoryId.value = categories.value[0]?.id
}
const onClickCategoryTag = (id: number) => {
  mainCategoryId.value = id
  emit('change-main-category', mainCategoryId.value)
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

<style lang="scss" scoped></style>
