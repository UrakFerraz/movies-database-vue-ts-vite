<template>
  <img loading="lazy" :src="src" :alt="alt" />
</template>

<script setup lang="ts">
const props = defineProps<{ src: string; alt: string }>();
</script>

<style lang="scss" scoped>
</style>