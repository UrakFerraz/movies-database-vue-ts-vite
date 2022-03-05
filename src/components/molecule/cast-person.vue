<template>
  <li class="cast-list-item">
    <div class="cast-list-img">
      <img :src="'https://image.tmdb.org/t/p/w200' + props.cast.profile_path" alt="" />
    </div>
    <a
      class="cast-name average-rgb--border"
      :href="
        'https://api.themoviedb.org/3/person/' +
        props.cast.cast_id +
        '/movie_credits?api_key=a152faf46b825f190ee05ae333705f56&language=en-US'
      "
      >{{ props.cast.name }}</a
    >
    <span>{{ props.cast.character }}</span>
  </li>
</template>

<script setup lang="ts">
import Cast from "../../interfaces/cast-person-interface";
const props = defineProps<{ cast: Cast }>();
console.log(props);
</script>

<style scoped>
.cast-list-img {
  overflow: hidden;
  position: relative;
  display: block;
  border-radius: 10px;
  max-height: 250px;
  margin-bottom: 10px;
}

.cast-list-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
