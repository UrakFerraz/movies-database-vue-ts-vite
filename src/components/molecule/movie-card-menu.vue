<template>
  <div class="card-menu fade-in-animation-delayed">
    <button
      @click="addOrRemoveToList('to-see')"
      :class="wasAddedtoSeeRef ? 'wish-list-btn--saved-movie' : 'wish-list-btn'"
    >
      To see
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
import {
  WasAddedValue,
  MovieStoreMethods,
} from "../../interfaces/movies-list-state-iterface";

watch(
  [favoriteMovies, toSeeMovies],
  (state) => {
    // FavoriteListMoviesStorage.addMovies(state[0]);
    // ToSeeListMoviesStorage.addMovies(state[1]);
  },
  { deep: true }
);

function checkwasAdded(store: WasAddedValue, ref: Ref) {
  const wasAdded = store.wasAdded(props.movieId);
  ref.value = wasAdded;
}

function addOrRemoveToList(storeName: "favorites" | "to-see") {
  if (storeName === "favorites") {
    return buttonPressed(favoritesStore, wasAddedFavoritesRef, storeName);
  }
  if (storeName === "to-see") {
    return buttonPressed(toSeeStore, wasAddedtoSeeRef, storeName);
  }
}

function buttonPressed(
  store: MovieStoreMethods,
  wasAdded: Ref,
  storageName: "favorites" | "to-see"
) {
  store.addOrRemoveMovie(props.movieId, storageName);
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

<style lang="scss" scoped>
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
  background: $gray;
  font-size: 11px;
  &:hover {
    background: $principal;
  }
  &--saved-movie {
    background: #345e3d;
    font-size: 11px;
  }
}

.favorite-btn {
  padding: 0;
  margin: 0;
  &:hover {
    transform: scale(0.95);
  }
  svg {
    width: 25px;
    height: 25px;
    pointer-events: none;
  }
}

.favorite-btn-shape:hover {
  fill: #e63717;
}
</style>
