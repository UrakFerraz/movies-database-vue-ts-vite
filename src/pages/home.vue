<template>
  <div class="home--content">
    <h2>Now Playing</h2>
    <MoviesList :movies="nowPlaying.results" v-if="nowPlaying !== null" />
    <h2>Popular</h2>
    <MoviesList :movies="popular.results" v-if="popular !== null" />
    <h2>Upcoming</h2>
    <MoviesList :movies="upcoming.results" v-if="upcoming !== null" />
    <h2>Top Rated</h2>
    <MoviesList :movies="topRated.results" v-if="topRated !== null" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MoviesList from "../components/organism/movies-list.vue";
import APIDefaultInfo from "../modules/default-api-info";
import ResultsInterface from "../interfaces/results-interface";
const defaultAPIInfos = new APIDefaultInfo();

const nowPlaying = ref<ResultsInterface>({} as ResultsInterface);
const popular = ref<ResultsInterface>({} as ResultsInterface);
const upcoming = ref<ResultsInterface>({} as ResultsInterface);
const topRated = ref<ResultsInterface>({} as ResultsInterface);

async function getNowPlayingMoviesLists(pageNum: number): Promise<void> {
  let list = {} as ResultsInterface;
  list = await defaultAPIInfos.fetchData(defaultAPIInfos.nowPlayingMoviesUrl);
  nowPlaying.value = list;
}
async function getPopularMoviesLists(pageNum: number): Promise<void> {
  let list = {} as ResultsInterface;
  list = await defaultAPIInfos.fetchData(defaultAPIInfos.popularMoviesUrl);
  popular.value = list;
}
async function getUpcomingMoviesLists(pageNum: number): Promise<void> {
  let list = {} as ResultsInterface;
  list = await defaultAPIInfos.fetchData(defaultAPIInfos.upcomingMoviesUrl);
  upcoming.value = list;
}
async function getTopRatedMoviesLists(pageNum: number): Promise<void> {
  let list = {} as ResultsInterface;
  list = await defaultAPIInfos.fetchData(defaultAPIInfos.topRatedMoviesUrl);
  console.log(list);

  topRated.value = list;
}

getNowPlayingMoviesLists(1);
getPopularMoviesLists(1);
getUpcomingMoviesLists(1);
getTopRatedMoviesLists(1);
</script>

<style scoped>
.home--content {
  padding: 20px;
}
</style>
