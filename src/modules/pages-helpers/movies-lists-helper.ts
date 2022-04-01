import { ref } from "vue";
import MovieInterface from "../../interfaces/movie-interface";
import MovieDatabase from "../movies-db-api";
import { favoritesStore, toSeeStore } from "../../store/get-states";
import MovieCardInterface from "../../interfaces/movie-card-interface";

const moviesList = ref<MovieCardInterface[]>([]);

let moviesIdsListFromStore: number[] = []

function getList(store: string): void {
	if (store === 'favorites') {
		moviesIdsListFromStore = favoritesStore.getList;
	}
	if (store === 'to-see') {
		moviesIdsListFromStore = toSeeStore.getList;
	}
}

async function getMovieDetails(movieId: number) {
  const movieDatabase = new MovieDatabase(movieId);
  let movieDetailsResponse = {} as MovieInterface;
  movieDetailsResponse = await movieDatabase.fetchData(
    movieDatabase.movieDetailsUrl
  );

  const {
    budget,
    genres,
    homepage,
    revenue,
    runtime,
    status,
    tagline,
    belongs_to_collection,
    imdb_id,
    production_companies,
    production_countries,
    spoken_languages,
    ...movie
  } = movieDetailsResponse;

  return movie;
}

export async function loadMovies(pageNumber: string, store: string): Promise<void> {
	getList(store)
  let moviesPerPage = 20;
  const pages = [];
  const promises = moviesIdsListFromStore.map(async (id) => {
    const response = await getMovieDetails(id);
    return response;
  });
  for (var i = 0; i < promises.length; i = i + moviesPerPage) {
    pages.push(promises.slice(i, i + moviesPerPage));
  }
  moviesList.value = await Promise.all(pages[Number(pageNumber)]);
  
}

export {moviesList}