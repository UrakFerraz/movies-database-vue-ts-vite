<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);
</script>

<template>
  <router-view name="header"></router-view>
  <div class="content">
    <router-view></router-view>
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
