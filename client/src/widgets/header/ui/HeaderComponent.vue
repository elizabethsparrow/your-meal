<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__container">
      <img class="" src="/icons/white-logo.svg" alt="" />
      <div class="header__content">
        <img class="header__image" src="/header-image.png" />
        <div class="header__text-block">
          <p class="header__heading">
            Только самые <br />
            <span class="header__heading_red"> сочные бургеры! </span>
          </p>
          <p class="header__text">Бесплатная доставка от 599₽</p>
        </div>
      </div>
    </div>
    <span class="header__circle"></span>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 466px;

  @media (max-width: 520px) {
    height: 429px;
  }

  &__container {
    position: relative;
    z-index: 2;
    @apply flex flex-col items-center justify-center;
  }

  &__content {
    @apply flex items-center;

    @media (max-width: 520px) {
      @apply flex flex-col-reverse items-center;

      p {
        text-align: center !important;
      }
    }
  }

  &__image {
    width: 50%;

    @media (max-width: 520px) {
      width: 80%;
    }
  }

  &__heading {
    @apply text-[50px] leading-[60px] font-extrabold mb-14;

    &_red {
      @apply text-[50px] leading-[60px] font-extrabold text-orange;
    }

    @media (min-width: 768px) {
      @apply w-max;
    }

    @media (max-width: 520px) {
      @apply text-[30px] leading-none mb-4 mt-6;

      &_red {
        @apply text-[30px] leading-none;
      }
    }
  }

  p {
    @apply text-white;
  }

  &__circle {
    display: block;
    position: absolute;
    top: -2414px;
    left: 50%;
    transform: translateX(-50%);
    width: 2880px;
    height: 2880px;
    @apply bg-yellow rounded-full;

    @media (max-width: 520px) {
      width: 611px;
      height: 611px;
      top: -182px;
    }
  }
}
</style>
