<template>
  <li class="cast-list-item">
    <div class="cast-list-img">
      <img
        :src="'https://image.tmdb.org/t/p/w200' + props.cast.profile_path"
        alt=""
      />
    </div>
    <a
      class="cast-name"
      :href="
        'https://api.themoviedb.org/3/person/' +
        props.cast.cast_id +
        '/movie_credits?api_key=a152faf46b825f190ee05ae333705f56&language=en-US'
      "
      >{{ props.cast.name }}</a
    >
    <span>{{ props.cast.character }}</span>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{ cast: any }>();
</script>

<style scoped>
</style>