<template>
  <div class="listed-movies">
    <Pagination />
    <MoviesTable :movies="moviesByQuery" :page-name="'search'" v-if="moviesByQuery" />
    <Pagination />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const props = defineProps<{ query: string; pageNumber: number | string }>();

import MoviesTable from "../components/organism/movies-table.vue";
import Pagination from "../components/molecule/pagination.vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";
import {
  getMoviesBySearchList,
  moviesByQuery,
} from "../modules/pages-helpers/search-page-helper";
const router = useRouter();

onBeforeRouteLeave((to, from) => {
  console.log(to);
  console.log(from);
});

getMoviesBySearchList(props.query, props.pageNumber);
</script>

<style lang="scss" scoped>
.listed-movies {
  padding: 20px;
}
</style>
