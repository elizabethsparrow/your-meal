<script setup lang="ts">
import { BasePopup, BaseCounter, BaseButton, EnumButtonStyles } from '@/shared/ui-kit'
import { ref } from 'vue'
import type { IProduct } from '@/entities/product'
import { getMainServerUrl } from '@/shared/lib/helpers'

const refBasePopup = ref(),
  mainProduct = ref<IProduct>(),
  productCount = ref<number>(1)

const open = (product: IProduct) => {
  mainProduct.value = product
  refBasePopup.value.open()
}

defineExpose({ open, close: refBasePopup.value?.close })
</script>

<template>
  <base-popup class="product-popup" ref="refBasePopup">
    <div class="pdoduct-popup__container" v-if="mainProduct">
      <h1 class="product-popup__title">{{ mainProduct.name }}</h1>
      <div class="product-popup__content">
        <div class="product-popup__left-block">
          <div class="left-block__cover-block">
            <img
              class="cover-block__image"
              v-if="mainProduct.cover"
              :src="getMainServerUrl() + mainProduct.cover"
              alt=""
            />
            <img src="/default-product.png" v-else />
          </div>
          <base-button class="left-block__button" :button-style="EnumButtonStyles.primary">
            Добавить
          </base-button>
        </div>
        <div class="product-popup__right-block">
          <div class="right-block__content">
            <p class="right-block__info">{{ mainProduct.description }}</p>
            <p class="right-block__info" v-if="mainProduct.ingredients">
              Состав: {{ mainProduct.ingredients }}
            </p>
            <p class="right-block__info right-block__info_light" v-if="mainProduct.weight">
              {{ mainProduct.weight }}г
            </p>
            <p class="right-block__info right-block__info_light" v-if="mainProduct.kilocalory">
              ккал{{ mainProduct.kilocalory }}
            </p>
          </div>

          <div class="right-block__bottom-block">
            <base-counter v-model:counter="productCount" />
            <h2 class="bottom-block__cost">{{ mainProduct.cost }}₽</h2>
          </div>
        </div>
      </div>
    </div>
  </base-popup>
</template>

<style lang="scss" scoped>
.product-popup {
  &__container {
  }
  &__content {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    gap: 12px;
  }

  &__title {
    @apply mb-6;
  }

  &__left-block {
    min-width: 200px;
    max-width: 270px;
    width: 100%;
    height: fit-content;

    .left-block__cover-block {
      @apply overflow-hidden min-w-[100px] max-w-[276px] w-full max-h-[220px] h-full float-right rounded-xl;
      .cover-block__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .left-block__button {
      margin-top: 40px;
      float: inline-end;
    }
  }

  &__right-block {
    min-width: 400px;
    max-width: 300px;
    width: 100%;
    height: 100%;
    @apply flex flex-col justify-between;

    .right-block__info {
      line-height: 1.5;

      &_light {
        @apply text-gray-400 text-sm;
      }
    }
    .right-block__bottom-block {
      @apply flex items-center justify-between;

      .bottom-block__cost {
        justify-self: end;
      }
    }
  }
}
</style>
