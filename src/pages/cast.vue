<template>
  <div class="cast-page">
    <div class="cast-page--content">
      <CastPersonWithDetails :castDetails="castPersonDetails" />
      <div class="cast-movies">
        <h2>Filmes</h2>
        <MoviesList :movies="castPersonMovies" v-if="castPersonMovies" />
      </div>
    </div>
  </div>
  <div class="cast-images">
    <Img
      v-for="castImage in castImages"
      :src="
        imgSrc('https://www.themoviedb.org/t/p/original', castImage!.file_path)
      "
      :alt="'cast id:' + castPersonId"
      :class="'img-cover'"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{ castPersonId: string | number }>();

import MoviesList from "../components/organism/movies-list.vue";
import CastPersonWithDetails from "../components/organism/cast-person-with-details.vue";
import getStates from "../store/get-states";
import Img from "../components/atoms/img.vue";
import Image from "../interfaces/image-inerface";
import {
  getCastPersonDetails,
  getCastPersonMovies,
  getCastPersonImages,
  castPersonDetails,
  castPersonMovies,
  castImages,
} from "../modules/pages-helpers/cast-page-helper";
import imgSrc from "../modules/image-helper";

onMounted(getStates);

getCastPersonDetails(props.castPersonId);
getCastPersonMovies(props.castPersonId);
getCastPersonImages(props.castPersonId);
getStates;
</script>

<style lang="scss" scoped>
.cast-page {
  display: grid;
  grid-template-columns: auto minmax(300px, 1200px) auto;
  &--content {
    grid-column: 2 / -2;
    h2 {
      margin-left: 20px;
    }
  }
}

.homepage-link {
  justify-self: center;
  padding: 10px 15px;
}

.cast-images {
  margin: 60px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 600px;
  justify-items: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 400px;
  }
  @media (min-width: 768px) {
    grid-auto-rows: 300px;
  }
}
</style>
