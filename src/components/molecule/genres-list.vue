<template>
  <div class="genres">
    <span>Gêneros:</span>
    <ul>
      <li v-for="genre in props.genres" :key="genre.id">
        <a class="average-rgb--border" :href="'#'">{{ genre.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ genres: any }>();
</script>

<style scoped>
.genres {
  margin: 20px 0;
}

.genres ul {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-flow: row wrap;
}
</style>