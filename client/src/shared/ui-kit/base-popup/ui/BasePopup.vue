<script setup lang="ts">
import { ref } from 'vue'

const resolve = ref<Function>(() => {}),
  reject = ref<Function>(() => {}),
  isOpen = ref<boolean>(false)

const open = () => {
  const popupPromise = new Promise((res, rej) => {
    resolve.value = res
    reject.value = rej
    isOpen.value = true
  })
  return popupPromise
}

const confirm = () => {
  resolve.value(true)
  isOpen.value = false
}

const close = () => {
  resolve.value(false)
  isOpen.value = false
}

defineExpose({ open, confirm, close })
</script>

<template>
  <div class="base-popup" v-if="isOpen">
    <div class="base-popup__container">
      <img @click="close" class="base-popup__close-cross" src="/icons/close-cross.svg" alt="" />
      <slot />
    </div>
    <div @click="close" class="base-popup__background"></div>
  </div>
</template>

<style lang="scss" scoped>
.base-popup {
  @apply fixed w-[100vw] h-[100vh] flex items-center justify-center;

  &__container {
    @apply relative z-[2] bg-white min-w-[300px] max-w-[90vw] w-fit p-4 max-h-[90vh] overflow-auto h-fit rounded-xl;
  }

  &__background {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.365);
  }

  &__close-cross {
    position: sticky;
    top: 0;
    right: 0;
    float: right;
    cursor: pointer;
  }
}
</style>
