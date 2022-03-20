<template>
  <div class="movies-lists-submenu">
    <router-link to="/to-see/0">To see</router-link>
    <router-link to="/favorites/0">Favorite</router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
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