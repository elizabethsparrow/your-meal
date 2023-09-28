<script setup lang="ts">
import { ref, watch, toRefs, onBeforeMount } from 'vue'

const props = defineProps<{ counter: number }>(),
  { counter } = toRefs(props)

const updateCounter = (val: number) => {
  emit('update:counter', val)
}

watch(
  () => counter.value,
  () => {
    if (counter.value <= 0) {
      emit('nullable')
      updateCounter(1)
    }
  }
)

const emit = defineEmits(['update:counter', 'nullable'])
</script>

<template>
  <div class="base-counter">
    <div class="base-counter__button base-counter__left-button" @click="updateCounter(counter - 1)">
      -
    </div>
    <div class="base-counter__counter">{{ counter }}</div>
    <div
      class="base-counter__button base-counter__right-button"
      @click="updateCounter(counter + 1)"
    >
      +
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-counter {
  @apply flex items-center;

  &__button {
    @apply w-10 h-10 flex items-center justify-center cursor-pointer bg-gray-200 hover:bg-gray-300;
  }

  &__counter {
    @apply flex items-center justify-center h-10 bg-gray-200 px-2;
  }

  &__left-button {
    border-radius: 12px 0 0 12px;
  }

  &__right-button {
    border-radius: 0 12px 12px 0;
  }
}
</style>
