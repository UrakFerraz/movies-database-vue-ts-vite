<template>
  <div class="home--content">
    <h2>Now Playing</h2>
    <MoviesList
      class="home-movies-list"
      :movies="nowPlaying"
      v-if="nowPlaying"
    />
    <h2>Popular</h2>
    <MoviesList class="home-movies-list" :movies="popular" v-if="popular" />
    <h2>Upcoming</h2>
    <MoviesList class="home-movies-list" :movies="upcoming" v-if="upcoming" />
    <h2>Top Rated</h2>
    <MoviesList class="home-movies-list" :movies="topRated" v-if="topRated" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import MoviesList from "../components/organism/movies-list.vue";
import APIDefaultInfo from "../modules/default-api-info";
import ResultsInterface from "../interfaces/results-interface";
const defaultAPIInfos = new APIDefaultInfo();
import { favorites, toSee } from "../store/movies-lists";
const favoritesStore = favorites();
const toSeeStore = toSee();

onMounted(() => {
  favoritesStore.getMoviesListDatabase();
});

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

.home-movies-list {
  min-height: 250px;
}
</style>
