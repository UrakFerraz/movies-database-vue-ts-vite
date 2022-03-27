<template>
  <div class="header average-rgb--bg">
    <router-link to="/" class="link">
      <h1>The Movie Database</h1>
    </router-link>
    <MoviesListSubmenu />
  </div>
</template>

<script setup lang="ts">
import MoviesListSubmenu from "../molecule/movies-lists-submenu.vue";
</script>

<style lang="scss" scoped>
.header {
  overflow: hidden;
  width: 100%;
  height: 40px;
  min-height: 40px;
  top: 0;
  left: 0;
  background: $principal;
  z-index: 999;
  h1 {
    opacity: 0.3;
    top: 4px;
    left: 0;
    transform-origin: 0;
    transform: scale(1.5);
    text-shadow: 0 0 10px black;
  }
}

.link {
  position: absolute;
  outline: none;
  border: none;
}

@media (min-width: 768px) {
  .header {
    h1 {
      transform: scale(2);
      top: -2px;
    }
  }
}
</style>