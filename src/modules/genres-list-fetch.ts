import APIDefaultInfo from "./default-api-info";
const defaultAPIInfos = new APIDefaultInfo();
export default async function getGenresList(value: any) {
  value = await defaultAPIInfos.fetchData(defaultAPIInfos.genresListUrl);
}