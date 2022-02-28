<script setup lang="ts">
const props = defineProps<{ cast: any }>();
</script>

<template>
  <li>
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


<style scoped>
.cast-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.cast-list-img {
  overflow: hidden;
  position: relative;
  display: block;
  border-radius: 10px;
}

.cast-list-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>