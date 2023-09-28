<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__block footer__logo-block">
          <img class="footer__logo-image" src="/icons/orange-logo.svg" alt="logo" />
        </div>
        <div class="footer__block">
          <h2>Номер для заказа</h2>
          <p class="footer__phone">
            <img src="/icons/phone.svg" ali="phone" />
            +7(930)833-38-11
          </p>
        </div>
        <div class="footer__block">
          <h2>Мы в соцсетях</h2>
          <div class="footer__social-media-block">
            <a href="#"><img src="/icons/vk-icon.svg" /></a>
            <a href="#"><img src="/icons/telegram-icon.svg" /></a>
          </div>
        </div>
      </div>
      <p class="footer__author">
        © YouMeal, 2022 <br />
        Design: Anastasia Ilina
      </p>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  @apply py-[52px] bg-white;

  &__container {
    width: 95%;
    margin: auto;
  }

  &__content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 12px;

      .footer__logo-block {
        grid-column-start: 1;
        grid-column-end: 3;

        @media (max-width: 320px) {
          grid-column-end: 1 !important;
        }
      }
    }

    @media (max-width: 320px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;

      .footer__logo-image {
        width: 70%;
      }
    }
  }

  &__phone {
    @apply flex items-center gap-1 mt-6;
  }

  &__social-media-block {
    @apply flex gap-4 mt-6 cursor-pointer;
  }

  &__author {
    @apply mt-[30px];
  }
}
</style>
