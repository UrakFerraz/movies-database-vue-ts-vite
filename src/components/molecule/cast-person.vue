<template>
  <li class="cast-list-item fade-in-animation-delayed">
    <div class="cast-list-img">
      <Img
        :src="'https://image.tmdb.org/t/p/w185' + cast.profile_path"
        :alt="cast.name"
      />
    </div>
    <router-link :to="'/cast/' + cast.id">{{ cast.name }}</router-link>
    <!-- <a
      class="cast-name average-rgb--border"
      :href="
        'https://api.themoviedb.org/3/person/' +
        cast.cast_id +
        '/movie_credits?api_key=a152faf46b825f190ee05ae333705f56&language=en-US'
      "
      >{{ cast.name }}</a
    > -->
    <span>{{ cast.character }}</span>
  </li>
</template>

<script setup lang="ts">
import Img from "../atoms/img.vue";
import Cast from "../../interfaces/cast-person-interface";
const props = defineProps<{ cast: Cast }>();
</script>

<style scoped>
.cast-list-img {
  overflow: hidden;
  position: relative;
  display: block;
  width: 100%;
  border-radius: 10px;
  max-height: 225px;
  margin-bottom: 10px;
}

.cast-list-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .cast-list-img {
    max-height: 250px;
  }
}
</style>
