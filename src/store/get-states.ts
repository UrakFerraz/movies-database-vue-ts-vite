import { favorites, toSee } from "../store/movies-lists";
export const favoritesStore = favorites();
export const toSeeStore = toSee();
export default function getStates() {
  favoritesStore.getMoviesListDatabase();
  toSeeStore.getMoviesListDatabase();
};