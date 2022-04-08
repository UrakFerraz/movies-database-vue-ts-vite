<template>
  <a :class="class" :href="href" :target="target">{{ title }}</a>
</template>

<script setup lang="ts">
const props = defineProps<{
  class: string;
  href: string;
  target: string;
  title: string;
}>();
</script>

<style lang="scss" scoped></style>
