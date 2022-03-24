import { Ref } from 'vue'
import Cast from '../../interfaces/cast-person-interface';
import MovieDatabase from "../movies-db-api";

export default async function getMovieCredits(movieDatabase: MovieDatabase, movieCredits: Ref, movieCreditsCastWithPhotos: Ref) {
  movieCredits.value =  await movieDatabase.fetchData(
    movieDatabase.movieCreditsUrl
	);
	viewCast(movieCreditsCastWithPhotos, movieCredits)
}

function viewCast(movieCreditsCastWithPhotos: Ref, movieCredits: Ref) {
	movieCreditsCastWithPhotos.value = getCastWithPhotos(movieCredits);
}

function getCastWithPhotos(movieCredits: Ref) {
  const castWithPhotos: Cast[] = [];
  movieCredits.value.cast.forEach((actor: Cast) => {
    if (actor.profile_path === null) return;
    castWithPhotos.push(actor);
  });
  if (castWithPhotos.length <= 21) {
    return castWithPhotos;
  }
  return castWithPhotos.splice(0, 18);
}