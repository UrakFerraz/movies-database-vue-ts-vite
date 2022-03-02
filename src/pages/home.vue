<template>
  <div class="home--content">
    <h2>Now Playing</h2>
    <MoviesList :content="nowPlaying" v-if="nowPlaying !== null" />
    <h2>Popular</h2>
    <MoviesList :content="popular" v-if="popular !== null" />
    <h2>Upcoming</h2>
    <MoviesList :content="upcoming" v-if="upcoming !== null" />
    <h2>Top Rated</h2>
    <MoviesList :content="topRated" v-if="topRated !== null" />
  </div>
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

async function getNowPlayingMoviesLists(pageNum: number) {
  let list = "";
  list = await defaultAPIInfos.fetchData(defaultAPIInfos.nowPlayingMoviesUrl);
  nowPlaying.value = list.results;
}
async function getPopularMoviesLists(pageNum: number) {
  let list = "";
  list = await defaultAPIInfos.fetchData(defaultAPIInfos.popularMoviesUrl);
  popular.value = list.results;
}
async function getUpcomingMoviesLists(pageNum: number) {
  let list = "";
  list = await defaultAPIInfos.fetchData(defaultAPIInfos.upcomingMoviesUrl);
  upcoming.value = list.results;
}
async function getTopRatedMoviesLists(pageNum: number) {
  let list = "";
  list = await defaultAPIInfos.fetchData(defaultAPIInfos.topRatedMoviesUrl);
  topRated.value = list.results;
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