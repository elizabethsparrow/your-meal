<script setup lang="ts">
import { type ICategory } from '@/entities/category'
import { getMainServerUrl } from '@/shared/lib/helpers'

defineProps<{
  category: ICategory
  isActive: boolean
}>()
</script>
<template>
  <div class="category-tag" :class="{ active: isActive }">
    <div class="category-tag__container">
      <img class="category-tag__icon" :src="getMainServerUrl() + category.icon" />
      <p class="category-tag__titile">{{ category.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-tag {
  @apply inline-block rounded-full bg-white py-2 px-4 cursor-pointer;

  &.active {
    @apply bg-yellow;
  }

  &__container {
    @apply flex items-center gap-2;
  }
}
</style>
