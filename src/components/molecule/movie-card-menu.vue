<template>
  <div class="card-menu">
    <button class="wish-list-btn">Ver depois</button>
    <button class="favorite-btn" @click="favoritePressed()">
      <FavoriteIcon :is-favorite="wasAddedFavoritesRef" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated } from "vue";
import { storeToRefs } from "pinia";
import FavoriteIcon from "../molecule/favorite-icon.vue";
const props = defineProps<{ movieId: number }>();
import { favorites } from "../../store/favorites";
const favoritesStore = favorites();
const wasAddedFavoritesRef = ref(false);

function checkwasAdded() {
  const wasAdded = favoritesStore.wasAdded(props.movieId);
  wasAddedFavoritesRef.value = wasAdded;
}

function favoritePressed() {
  favoritesStore.favoritePressed(props.movieId);
  checkwasAdded();
}

onMounted(() => {
  checkwasAdded();
});
onUpdated(() => {
  checkwasAdded();
});
</script>

<style scoped>
.card-menu {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  z-index: 20;
  gap: 20px;
}

button {
  border: none;
}

.wish-list-btn {
  background: var(--gray);
  font-size: 11px;
}

.favorite-btn {
  padding: 0;
  margin: 0;
}

.wish-list-btn:hover {
  background: var(--principal);
}

.favorite-btn svg {
  width: 25px;
  height: 25px;
  pointer-events: none;
}

.favorite-btn:hover {
  transform: scale(0.95);
}

.favorite-btn-shape:hover {
  fill: #e63717;
}

@media (min-width: 768px) {
  .wish-list-btn {
    font-size: 14px;
  }
}
</style>