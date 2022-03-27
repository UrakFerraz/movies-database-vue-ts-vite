<template>
  <div class="genres">
    <span>Gêneros:</span>
    <ul>
      <li v-for="genre in genres" :key="genre.id">
        <router-link :to="`/${genre.id}/${1}`" class="average-rgb--border">{{
          genre.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import GenresInterface from "../../interfaces/genres-interface";
const props = defineProps<{ genres: GenresInterface[] }>();
</script>

<style lang="scss" scoped>
.genres {
  margin: 20px 0;
  ul {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    flex-flow: row wrap;
  }
}
</style>
