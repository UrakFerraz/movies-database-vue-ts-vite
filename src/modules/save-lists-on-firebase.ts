import { Ref } from "vue";
import { storeToRefs } from "pinia";
import { favorites, toSee } from "../store/movies-lists";
const favoritesStore = favorites();
const { movies: favoriteMovies } = storeToRefs(favoritesStore);
const toSeeStore = toSee();
const { movies: toSeeMovies } = storeToRefs(toSeeStore);

function getStringOfMoviesId(list: Ref) {
  const res = JSON.stringify(list);
  const regex = /(\[.*\])/gmi; //https://regex101.com/r/OhyAZ7/2
  const ids = regex.exec(res);
  if (ids !== null) {
    return ids;
  }
}

export default function SaveListsOnFirebase() {
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
}