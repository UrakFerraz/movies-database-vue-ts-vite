import { ref } from "vue";
import CastPersonDetails from "../../interfaces/cast-person-details-interface";
import { CastImageInterface } from "../../interfaces/cast-image-inerface";
import Image from "../../interfaces/image-inerface";
import MovieInListInerface from "../../interfaces/movies-in-list-interface";
import APIDefaultInfo from "../../modules/default-api-info";
const defaultAPIInfos = new APIDefaultInfo();
export const castPersonDetails = ref<CastPersonDetails>({} as CastPersonDetails);
export const castPersonMovies = ref<MovieInListInerface[]>([]);
export const castImages = ref<Image[]>();
export async function getCastPersonDetails(personId: string | number) {
  let details = {} as CastPersonDetails;
  details = await defaultAPIInfos.fetchData(
    defaultAPIInfos.getCastPersonDetailsURL(Number(personId))
  );
  castPersonDetails.value = details;
}
export async function getCastPersonMovies(personId: string | number) {
  let details = null;
  details = await defaultAPIInfos.fetchData(
    defaultAPIInfos.getCastPersonMoviesURL(Number(personId))
  );
  castPersonMovies.value = details.cast;
}
export async function getCastPersonImages(personId: string | number) {
  let images = {} as CastImageInterface;
  images = await defaultAPIInfos.fetchData(
    defaultAPIInfos.getCastPersonImages(Number(personId))
  ).then(img => img)
  castImages.value = images.profiles
}