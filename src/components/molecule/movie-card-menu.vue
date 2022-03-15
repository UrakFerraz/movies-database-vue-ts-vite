<template>
  <div class="card-menu fade-in-animation-delayed">
    <button
      @click="toSeePressed()"
      :class="wasAddedtoSeeRef ? 'wish-list-btn--saved-movie' : 'wish-list-btn'"
    >
      Ver depois
    </button>
    <button class="favorite-btn" @click="favoritePressed()">
      <FavoriteIcon :is-favorite="wasAddedFavoritesRef" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, Ref, watch } from "vue";
import { storeToRefs } from "pinia";
import FavoriteIcon from "../molecule/favorite-icon.vue";
const props = defineProps<{ movieId: number }>();
import { favorites, toSee } from "../../store/movies-lists";
const favoritesStore = favorites();
const { movies: favoriteMovies } = storeToRefs(favoritesStore);
const wasAddedFavoritesRef = ref(false);
const toSeeStore = toSee();
const { movies: toSeeMovies } = storeToRefs(toSeeStore);
const wasAddedtoSeeRef = ref(false);
import MoviesListStorage from "../../store/localStorage";
const FavoriteListMoviesStorage = new MoviesListStorage("Favorite Movies");
const ToSeeListMoviesStorage = new MoviesListStorage("To See Movies");
watch(
  [favoriteMovies, toSeeMovies],
  (state) => {
    // FavoriteListMoviesStorage.addMovies(state[0]);
    // ToSeeListMoviesStorage.addMovies(state[1]);
  },
  { deep: true }
);

function getStringOfMoviesId(list: Ref): string {
  const res = JSON.stringify(list);
  const regex = /(?<ids>\[.*\])/gim; //https://regex101.com/r/OhyAZ7/2
  const {
    groups: { ids },
  } = regex.exec(res);
  if (ids !== null) {
    return ids;
  }
}

fetch("https://movies-lists-3a7ad-default-rtdb.firebaseio.com/movies.json", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    favorites: getStringOfMoviesId(favoriteMovies),
    toSee: getStringOfMoviesId(toSeeMovies),
  }),
});

function checkwasAdded(store: any, ref: Ref) {
  const wasAdded = store.wasAdded(props.movieId);
  ref.value = wasAdded;
}

function favoritePressed() {
  favoritesStore.favoritePressed(props.movieId);
  checkwasAdded(favoritesStore, wasAddedFavoritesRef);
  FavoriteListMoviesStorage.addMovie(props.movieId);
}

function toSeePressed() {
  toSeeStore.toSeePressed(props.movieId);
  checkwasAdded(toSeeStore, wasAddedtoSeeRef);
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