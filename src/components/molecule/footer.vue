<template>
  <div class="footer average-rgb--bg">
    <Link
      :class="'average-rgb--border'"
      :href="'https://github.com/UrakFerraz/movies-database-vue-ts-vite'"
      :target="'_blank'"
      :title="'GitHub'"
    />
  </div>
</template>

<script setup lang="ts">
import Link from "../atoms/link.vue";
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 50px;
  background: $principal;
  padding: 20px;
}
</style>