<script setup lang="ts">
import { FooterComponent } from '@/widgets/footer'
import { HeaderComponent } from '@/widgets/header'
</script>

<template>
  <div class="main-page-layout">
    <div class="main-page-layout__container">
      <header-component />
      <main class="main-page-layout__main-block">
        <slot />
      </main>
      <footer-component class="main-page-layout__footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-page-layout {
  &__container {
  }

  &__main-block {
  }

  &__footer {
    @apply mt-[100px];
  }
}
</style>
