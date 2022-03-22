<template>
  <div class="rating average-rgb--bg">
    <div class="rate">
      <p>{{ movie.vote_average }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ movie: any }>();
</script>

<style scoped>
.rating {
  position: relative;
  display: inline-flex;
  padding: 5px 9px;
  align-self: start;
  justify-self: center;
  border-radius: 5px;
  margin-bottom: 4px;
}
.rating p {
  margin: 0;
  padding: 0;
}
</style>