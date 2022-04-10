import { ref } from "vue";
import ResultsInterface from "../../interfaces/results-interface";
import APIDefaultInfo from "../../modules/default-api-info";

const defaultAPIInfos = new APIDefaultInfo();

export const moviesByQuery = ref<ResultsInterface>({} as ResultsInterface);

export async function getMoviesBySearchList(query: string, pageNum: number | string) {
  let list = {} as ResultsInterface;
  list = await defaultAPIInfos.fetchData(
    defaultAPIInfos.searchMovies(query, Number(pageNum))
  );
  
  moviesByQuery.value = list;
}