<template>
  <li class="cast-list-item fade-in-animation-delayed">
    <div class="cast-list-img">
      <Img
        :src="imgSrc('https://image.tmdb.org/t/p/w185', cast.profile_path)"
        :alt="cast.name"
        :class="'img-cover'"
      />
    </div>
    <router-link :to="'/cast/' + cast.id" class="average-rgb--border">{{
      cast.name
    }}</router-link>
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
import imgSrc from "../../modules/image-helper";
</script>

<style lang="scss" scoped>
.cast-list-img {
  overflow: hidden;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  aspect-ratio: 1 / 1.5;
  @media (min-width: 768px) {
    max-height: 250px;
  }
}
</style>
