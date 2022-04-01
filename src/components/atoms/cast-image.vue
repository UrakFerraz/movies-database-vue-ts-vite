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
  return (props.castDetails.profile_path !== null && typeof props.castDetails.profile_path !== "undefined") ? prefix + props.castDetails.profile_path : "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='%23990000' d='M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z'/%3e%3c/svg%3e"
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