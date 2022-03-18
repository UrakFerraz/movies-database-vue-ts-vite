import { ref } from "vue";
import ResultsInterface from "../../interfaces/results-interface";
import APIDefaultInfo from "../../modules/default-api-info";
const defaultAPIInfos = new APIDefaultInfo();
export const nowPlaying = ref<ResultsInterface>({} as ResultsInterface);
export const popular = ref<ResultsInterface>({} as ResultsInterface);
export const upcoming = ref<ResultsInterface>({} as ResultsInterface);
export const topRated = ref<ResultsInterface>({} as ResultsInterface);

export async function getNowPlayingMoviesLists(pageNum: number): Promise<void> {
  let list = {} as ResultsInterface;
  list = await defaultAPIInfos.fetchData(defaultAPIInfos.nowPlayingMoviesUrl);
  nowPlaying.value = list;
}
export async function getPopularMoviesLists(pageNum: number): Promise<void> {
  let list = {} as ResultsInterface;
  list = await defaultAPIInfos.fetchData(defaultAPIInfos.popularMoviesUrl);
  popular.value = list;
}
export async function getUpcomingMoviesLists(pageNum: number): Promise<void> {
  let list = {} as ResultsInterface;
  list = await defaultAPIInfos.fetchData(defaultAPIInfos.upcomingMoviesUrl);
  upcoming.value = list;
}
export async function getTopRatedMoviesLists(pageNum: number): Promise<void> {
  let list = {} as ResultsInterface;
  list = await defaultAPIInfos.fetchData(defaultAPIInfos.topRatedMoviesUrl);
  topRated.value = list;
}