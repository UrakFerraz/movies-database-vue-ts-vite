<template>
  <div class="movies-lists-submenu">
    <router-link to="/to-see/0">To see</router-link>
    <router-link to="/favorites/0">Favorite</router-link>
    <SearchButton @search-button-clicked="openSearchModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SearchButton from "../atoms/search-button.vue";

const emit = defineEmits(["open-search-modal"]);

const openSearchModal = () => {
  console.log("emit: open-search-modal");
  emit("open-search-modal");
};
</script>

<style lang="scss" scoped>
.movies-lists-submenu {
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  right: 20px;
  pointer-events: none;
}

a {
  background-color: rgba(0, 0, 0, 0.2);
  border-color: rgba(199, 199, 199, 0.3);
  font-size: 12px;
  pointer-events: all;
}
</style>
