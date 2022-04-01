<template>
  <div class="cast-img">
    <Img
      :src="profileImgSrc('https://image.tmdb.org/t/p/original')"
      :alt="castDetails.name"
      :class="'img-cover'"
    />
  </div>
</template>

<script setup lang="ts">
import Img from "../atoms/img.vue";
import CastDetails from "../../interfaces/cast-person-details-interface";
const props = defineProps<{ castDetails: CastDetails }>();
function profileImgSrc(prefix: string) {
  return (props.castDetails.profile_path !== null && typeof props.castDetails.profile_path !== "undefined") ? prefix + props.castDetails.profile_path : '../../assets/ban.svg'
}
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