<template>
  <div class="error-page">
    <div class="error-page__card">
      <h1 class="error-page__title">404</h1>
      <h2 class="error-page__subtitle">Página não encontrada</h2>
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.error-page {
  background: url("../assets/bg.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  &__card {
    /* From https://css.glass */
    background: rgba(10, 10, 10, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    margin-top: 50px;
    width: 50vw;
    padding: 40px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
  &__title {
    font-size: 60px;
    opacity: 0.7;
  }
  &__subtitle {
    margin-bottom: 40px;
  }
}
</style>