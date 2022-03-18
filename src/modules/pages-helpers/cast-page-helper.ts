import { ref } from "vue";
import CastPersonDetails from "../../interfaces/cast-person-details-interface";
import APIDefaultInfo from "../../modules/default-api-info";
const defaultAPIInfos = new APIDefaultInfo();
export const castPersonDetails = ref<CastPersonDetails>({} as CastPersonDetails);
export const castPersonMovies = ref(null) as any;
export const castImages = ref(null) as any;
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
  let images = {} as any;
  images = await defaultAPIInfos.fetchData(
    defaultAPIInfos.getCastPersonImages(Number(personId))
  );
  castImages.value = images.profiles;
}