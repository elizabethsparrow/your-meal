<script setup lang="ts"></script>

<template>
  <div class="app__container">
    <router-view />
  </div>
</template>

<style lang="scss">
#app,
.app__container {
  max-width: 100vw;
  width: 100%;
  max-height: 100vh;
  height: 100%;
  background: $mainBackground;
  overflow: auto;
}
</style>
