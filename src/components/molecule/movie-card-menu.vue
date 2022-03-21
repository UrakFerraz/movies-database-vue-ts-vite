<template>
  <div class="card-menu fade-in-animation-delayed">
    <button
      @click="addOrRemoveToList('to-see')"
      :class="wasAddedtoSeeRef ? 'wish-list-btn--saved-movie' : 'wish-list-btn'"
    >
      Ver depois
    </button>
    <button class="favorite-btn" @click="addOrRemoveToList('favorites')">
      <FavoriteIcon :is-favorite="wasAddedFavoritesRef" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref, watch, onUpdated } from "vue";
import { storeToRefs } from "pinia";
import FavoriteIcon from "../atoms/favorite-icon.vue";
const props = defineProps<{ movieId: number }>();
import { favorites, toSee } from "../../store/movies-lists";
const favoritesStore = favorites();
const { movies: favoriteMovies } = storeToRefs(favoritesStore);
const wasAddedFavoritesRef = ref(false);
const toSeeStore = toSee();
const { movies: toSeeMovies } = storeToRefs(toSeeStore);
const wasAddedtoSeeRef = ref(false);
watch(
  [favoriteMovies, toSeeMovies],
  (state) => {
    // FavoriteListMoviesStorage.addMovies(state[0]);
    // ToSeeListMoviesStorage.addMovies(state[1]);
  },
  { deep: true }
);

function checkwasAdded(store: any, ref: Ref) {
  const wasAdded = store.wasAdded(props.movieId);
  ref.value = wasAdded;
}

function addOrRemoveToList(storeName: "favorites" | "to-see") {
  if (storeName === "favorites") {
    return buttonPressed(favoritesStore, wasAddedFavoritesRef);
  }
  if (storeName === "to-see") {
    return buttonPressed(toSeeStore, wasAddedtoSeeRef);
  }
}

function buttonPressed(store: any, wasAdded: Ref) {
  store.addOrRemoveMovie(props.movieId);
  checkwasAdded(store, wasAdded);
}

onMounted(() => {
  checkwasAdded(favoritesStore, wasAddedFavoritesRef);
  checkwasAdded(toSeeStore, wasAddedtoSeeRef);
});

onUpdated(() => {
  checkwasAdded(favoritesStore, wasAddedFavoritesRef);
  checkwasAdded(toSeeStore, wasAddedtoSeeRef);
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

.wish-list-btn--saved-movie {
  background: #345e3d;
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