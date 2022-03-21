<template>
  <div class="cast-img fade-in-animation">
    <img
      loading="lazy"
      :src="'https://image.tmdb.org/t/p/original' + castDetails.profile_path"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import CastDetails from "../../interfaces/cast-person-details-interface";
const props = defineProps<{ castDetails: CastDetails }>();
</script>

<style scoped>
.cast-img {
  overflow: hidden;
  position: relative;
  display: block;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 200px;
  align-self: center;
}

.cast-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .cast-img {
    width: 330px;
  }
}
</style>