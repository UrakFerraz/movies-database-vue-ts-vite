<template>
  <div class="header average-rgb--bg">
    <router-link to="/" class="link">
      <div class="header__title">
        <h1>The Movie Database</h1>
      </div>
    </router-link>
    <MoviesListSubmenu @open-search-modal="openSearchModal()" />
    <SearchBar :open-modal="isOpenSearchModal" @close-modal="closeModal()" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MoviesListSubmenu from "../molecule/movies-lists-submenu.vue";
import SearchBar from "../organism/search-bar.vue";

const isOpenSearchModal = ref(false);

function openSearchModal() {
  isOpenSearchModal.value = true;
}

function closeModal() {
  isOpenSearchModal.value = false;
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 40px;
  min-height: 40px;
  top: 0;
  left: 0;
  background: $principal;
  z-index: 999;
  &__title {
    width: 100%;
    height: 100%;
    h1 {
      opacity: 0.3;
      top: 4px;
      left: 0;
      transform-origin: 0;
      transform: scale(1.5);
      text-shadow: 0 0 10px black;
      @media (min-width: 768px) {
        transform: scale(2);
        top: -2px;
      }
    }
  }
}

.link {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  outline: none;
  border: none;
}
</style>
