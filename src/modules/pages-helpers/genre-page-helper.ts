import { ref } from "vue";
import ResultsInterface from "../../interfaces/results-interface";
import APIDefaultInfo from "../../modules/default-api-info";

const defaultAPIInfos = new APIDefaultInfo();

export const moviesByGenre = ref<ResultsInterface>({} as ResultsInterface);

export async function getMoviesByGenreList(pageNum: number | string, genre: string) {
  let list = {} as ResultsInterface;
  list = await defaultAPIInfos.fetchData(
    defaultAPIInfos.getGenreUrl(Number(pageNum), genre)
  );
  moviesByGenre.value = list;
}