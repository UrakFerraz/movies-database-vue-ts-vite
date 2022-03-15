<template>
  <div class="listed-movies--content">
    <Pagination />
    <Suspense>
      <MoviesTable :movies="moviesByGenre" v-if="moviesByGenre" />
      <template #fallback> Loading... </template>
    </Suspense>
    <Pagination />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import MoviesTable from "../components/organism/movies-table.vue";
import Pagination from "../components/molecule/pagination.vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";
import Genres from "../components/organism/genres.vue";
import ResultsInterface from "../interfaces/results-interface";
import APIDefaultInfo from "../modules/default-api-info";
const defaultAPIInfos = new APIDefaultInfo();
const router = useRouter();

onBeforeRouteLeave((to, from) => {
  console.log(to);
  console.log(from);
});

const props = defineProps<{ pageNumber: number | string; genre: string }>();

const moviesByGenre = ref<ResultsInterface>({} as ResultsInterface);

async function getMoviesByGenreList(pageNum: number | string, genre: string) {
  let list = {} as ResultsInterface;
  list = await defaultAPIInfos.fetchData(
    defaultAPIInfos.getGenreUrl(Number(pageNum), genre)
  );
  moviesByGenre.value = list;
}

getMoviesByGenreList(props.pageNumber, props.genre);
</script>

<style scoped>
.listed-movies--content {
  padding: 20px;
}
</style>
