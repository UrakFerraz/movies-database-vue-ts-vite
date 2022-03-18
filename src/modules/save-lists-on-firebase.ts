import { Ref } from "vue";
import { storeToRefs } from "pinia";
import { favorites, toSee } from "../store/movies-lists";
import firebaseURL from '../modules/firebase-database-url'
const favoritesStore = favorites();
const { movies: favoriteMovies } = storeToRefs(favoritesStore);
const toSeeStore = toSee();
const { movies: toSeeMovies } = storeToRefs(toSeeStore);

const firebaseList = `${firebaseURL}/movies.json`

function getStringOfMoviesId(list: Ref) {
  const res = JSON.stringify(list);
  const regex = /(\[.*\])/gmi; //https://regex101.com/r/OhyAZ7/2
  const ids = regex.exec(res);
  if (ids !== null) {
    return ids;
  }
}

export default function SaveListsOnFirebase() {
  fetch(firebaseList, {
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