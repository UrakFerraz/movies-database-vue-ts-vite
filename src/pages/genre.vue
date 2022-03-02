<template>
  <div class="home--content">
    <MoviesTable :content="moviesByGenre" v-if="moviesByGenre !== null" />
    <Pagination />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import MoviesTable from "../components/organism/movies-table.vue";
import APIDefaultInfo from "../modules/default-api-info";
import Pagination from "../components/molecule/pagination.vue";

const defaultAPIInfos = new APIDefaultInfo();

const props = defineProps<{ pageNumber: number | string; genre: string }>();

const moviesByGenre = ref(null) as any;

async function getMoviesByGenreList(pageNum: number | string, genre: string) {
  let list = "";
  list = await defaultAPIInfos.fetchData(
    defaultAPIInfos.getGenreUrl(pageNum, genre)
  );
  moviesByGenre.value = list.results;
}

getMoviesByGenreList(props.pageNumber, props.genre);
</script>

<style scoped>
.home--content {
  padding: 20px;
}
</style>