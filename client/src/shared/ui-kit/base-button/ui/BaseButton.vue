<script setup lang="ts">
import { EnumButtonStyles } from '../index'

defineProps<{ buttonStyle: EnumButtonStyles }>()
</script>

<template>
  <button
    class="base-button"
    v-if="EnumButtonStyles"
    :class="`base-button_${EnumButtonStyles[buttonStyle]}`"
  >
    <div class="base-button__container">
      <slot />
    </div>
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  @apply w-full py-3 overflow-hidden rounded-xl;

  &__container {
    @apply flex items-center justify-center;
  }

  &_primary {
    @apply bg-orange text-white hover:bg-yellow transition-[.2s] active:bg-orangeDark;
  }

  &_secondary {
    @apply bg-gray-100 text-black hover:bg-yellow hover:text-white active:text-white transition-[.2s] active:bg-orangeDark;
  }
}
</style>
