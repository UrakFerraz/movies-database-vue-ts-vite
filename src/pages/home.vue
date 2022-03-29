<template>
  <div class="home">
    <h2>Now Playing</h2>
    <MoviesList
      class="home--movies-list"
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
import {
  getNowPlayingMoviesLists,
  getPopularMoviesLists,
  getUpcomingMoviesLists,
  getTopRatedMoviesLists,
  nowPlaying,
  popular,
  upcoming,
  topRated,
} from "../modules/pages-helpers/home-page-helper";
import MoviesList from "../components/organism/movies-list.vue";
import APIDefaultInfo from "../modules/default-api-info";
import ResultsInterface from "../interfaces/results-interface";
import getStates from "../store/get-states";

onMounted(getStates);

getNowPlayingMoviesLists(1);
getPopularMoviesLists(1);
getUpcomingMoviesLists(1);
getTopRatedMoviesLists(1);
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
  &--movies-list {
    min-height: 250px;
  }
}
</style>
