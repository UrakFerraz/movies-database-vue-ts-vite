<template>
  <div class="cast-page--wrapper">
    <div class="cast-content">
      <CastPersonWithDetails :castDetails="castPersonDetails" />
      <div class="cast-movies">
        <h2>Filmes</h2>
        <MoviesList :movies="castPersonMovies" v-if="castPersonMovies" />
      </div>
    </div>
  </div>
  <div class="cast-images">
    <img
      loading="lazy"
      :src="'https://www.themoviedb.org/t/p/original' + castImage.file_path"
      v-for="(castImage, index) in castImages"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import APIDefaultInfo from "../modules/default-api-info";
import MoviesList from "../components/organism/movies-list.vue";
import CastPersonWithDetails from "../components/molecule/cast-person-with-details.vue";
import CastPersonDetails from "../interfaces/cast-person-details-interface";
import MovieInListInerface from "../interfaces/movies-in-list-interface";

const defaultAPIInfos = new APIDefaultInfo();

const props = defineProps<{ castPersonId: string | number }>();

const castPersonDetails = ref<CastPersonDetails>({} as CastPersonDetails);
const castPersonMovies = ref(null) as any;
const castPersonTV = ref(null) as any;
const castImages = ref(null) as any;

async function getCastPersonDetails(personId: string | number) {
  let details = {} as CastPersonDetails;
  details = await defaultAPIInfos.fetchData(
    defaultAPIInfos.getCastPersonDetailsURL(Number(personId))
  );
  castPersonDetails.value = details;
}
async function getCastPersonMovies(personId: string | number) {
  let details = null;
  details = await defaultAPIInfos.fetchData(
    defaultAPIInfos.getCastPersonMoviesURL(Number(personId))
  );
  castPersonMovies.value = details.cast;
}
async function getCastPersonImages(personId: string | number) {
  let images = {} as any;
  images = await defaultAPIInfos.fetchData(
    defaultAPIInfos.getCastPersonImages(Number(personId))
  );
  castImages.value = images.profiles;
}
getCastPersonDetails(props.castPersonId);
getCastPersonMovies(props.castPersonId);
getCastPersonImages(props.castPersonId);
</script>

<style scoped>
.cast-page--wrapper {
  display: grid;
  grid-template-columns: auto minmax(300px, 1200px) auto;
}
.cast-content {
  grid-column: 2 / -2;
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
}

.cast-images img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 400px;
}

@media (min-width: 768px) {
  .cast-images {
    grid-auto-rows: 300px;
  }
}
</style>