<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>

<template>
  <router-view name="header"></router-view>
  <div class="content">
    <router-view :key="route.path"></router-view>
  </div>
  <router-view name="footer"></router-view>
</template>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
}
</style>
