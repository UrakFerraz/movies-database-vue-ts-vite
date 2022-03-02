<template>
  <MoviesList :content="nowPlaying" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import MoviesList from "../components/organism/movies-list.vue";
import APIDefaultInfo from "../modules/default-api-info";
const defaultAPIInfos = new APIDefaultInfo();

const nowPlaying = ref(null) as any;
const popular = ref(null) as any;
const upcoming = ref(null) as any;
const topRated = ref(null) as any;

async function getMoviesList(pageNum: number) {
  nowPlaying.value = await defaultAPIInfos.fetchData(
    defaultAPIInfos.nowPlayingMoviesUrl
  );
  popular.value = await defaultAPIInfos.fetchData(
    defaultAPIInfos.populargMoviesUrl
  );
  upcoming.value = await defaultAPIInfos.fetchData(
    defaultAPIInfos.upcomingMoviesUrl
  );
  topRated.value = await defaultAPIInfos.fetchData(
    defaultAPIInfos.topRatedMoviesUrl
  );
}

getMoviesList(1);
</script>

<style scoped>
</style>