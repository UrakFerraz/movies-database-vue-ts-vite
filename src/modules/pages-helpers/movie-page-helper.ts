import { ref } from "vue";
import MovieInterface from "../../interfaces/movie-interface";
import MovieDatabase from "../../modules/movies-db-api";
import getAverageRgb from "../../modules/get-average-rgb";
export const movieDetails = ref<MovieInterface>({} as MovieInterface);
export const averageRGB = ref(null) as any;
export async function getMovieDetails(data: MovieDatabase) {
  let movieDetailsResponse = {} as MovieInterface;
  movieDetailsResponse = await data.fetchData(
    data.movieDetailsUrl
  );
  movieDetails.value = movieDetailsResponse;
  averageRGB.value = await getAverageRGBfromPoster();
}

async function getAverageRGBfromPoster() {
  const rgb = await getAverageRgb(
    `https://image.tmdb.org/t/p/w300${movieDetails.value.poster_path}`
  );
  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}