<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
console.log(route);
console.log(router);
</script>

<template>
  <router-view name="header"></router-view>
  <div class="content">
    <router-view :key="route.path"></router-view>
  </div>
  <router-view name="footer"></router-view>
</template>

<style scoped>
#app {
  background: var(--darkest-color);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content {
  min-height: 100vh;
}
</style>
