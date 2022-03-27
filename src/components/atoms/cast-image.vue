<template>
  <div class="cast-img fade-in-animation">
    <Suspense>
      <Img
        :src="'https://image.tmdb.org/t/p/original' + castDetails.profile_path"
        :alt="castDetails.name"
      />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import Img from "../atoms/img.vue";
import CastDetails from "../../interfaces/cast-person-details-interface";
const props = defineProps<{ castDetails: CastDetails }>();
</script>

<style lang="scss" scoped>
.cast-img {
  overflow: hidden;
  position: relative;
  display: block;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 200px;
  align-self: center;
  aspect-ratio: 1 / 1.5;
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