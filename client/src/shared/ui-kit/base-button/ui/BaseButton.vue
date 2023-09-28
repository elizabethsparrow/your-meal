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
      <p>
        <slot />
      </p>
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
    @apply bg-orange hover:bg-yellow transition-[.2s] active:bg-orangeDark;
    * {
      @apply text-white;
    }
  }

  &_secondary {
    @apply bg-gray-100 text-black hover:bg-yellow transition-[.2s] active:bg-orangeDark;
    &:hover * {
      @apply text-white;
    }
    &:active * {
      @apply text-white;
    }
  }
}
</style>
