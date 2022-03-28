<template>
  <div class="cast-img">
    <Img
      :src="'https://image.tmdb.org/t/p/original' + castDetails.profile_path"
      :alt="castDetails.name"
      :class="'img-cover'"
    />
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
  border-radius: 10px;
  margin-bottom: 10px;
  width: 200px;
  align-self: center;
  aspect-ratio: 1 / 1.5;
  @media (min-width: 768px) {
    width: 330px;
  }
}
</style>