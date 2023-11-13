<script setup lang="ts">
import { BasePopup, BaseButton, EnumButtonStyles } from '@/shared/ui-kit'
import { reactive, ref } from 'vue'
import type { IProductOrder, ICreateOrder } from '@/entities/order'

let refBasePopup = ref(),
  productOrders = ref<IProductOrder[]>([])

let form = reactive<ICreateOrder>({
  name: '',
  phone: null,
  product_orders: [],
  house: '',
  street: '',
  apartment: '',
  floor: ''
})

const open = (product_orders: IProductOrder[]) => {
  productOrders.value = product_orders
  refBasePopup.value?.open()
}

defineExpose({ open })
</script>

<template>
  <base-popup ref="refBasePopup" class="order-popup">
    <div class="order-popup__container">
      <div class="order-popup__content">
        <div class="order-popup__left-side">
          <img src="/donut.png" alt="" />
        </div>
        <div class="order-popup__right-side">
          <h1 class="mb-4">Доставка</h1>

          <input-text class="order-popup__input" placeholder="Ваше имя" v-model="form.name" />
          <input-number class="order-popup__input" placeholder="Телефон" v-model="form.phone" />
          <span class="flex items-center gap-2">
            <input-text class="order-popup__input" placeholder="Улица" v-model="form.street" />
            <input-text class="order-popup__input" placeholder="Дом" v-model="form.house" />
          </span>
          <span class="flex items-center gap-2">
            <input-text
              class="order-popup__input"
              placeholder="Квартира"
              v-model="form.apartment"
            />
            <input-text class="order-popup__input" placeholder="Этаж" v-model="form.floor" />
            <input-number
              class="order-popup__input"
              placeholder="Домофон"
              v-model="form.intercom"
            />
          </span>
          <base-button class="mt-8" :button-style="EnumButtonStyles.primary">
            Офрормить
          </base-button>
        </div>
      </div>
    </div>
  </base-popup>
</template>

<style lang="scss">
.base-popup__container {
  padding: 0 !important;
  background: #f9f9f9 !important;
}
.order-popup {
  top: 0;
  z-index: 2;

  &__container {
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1000px;
  }

  &__input {
    @apply w-full;
  }

  &__left-side {
    width: 100%;
    height: 100%;
    background: #ffab08;
    @apply flex items-center justify-center;
  }

  &__right-side {
    @apply flex flex-col justify-between gap-2 p-6;
  }
}
</style>
