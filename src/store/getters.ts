import { MoviesListState, WasAdded } from "../interfaces/movies-list-state-iterface"
const getters = {
  wasAdded: (state: MoviesListState): WasAdded => {
    return (movieId: number) => state.movies.includes(movieId)
  },
  total: (state: MoviesListState): number => {
    return state.movies.length
  },
  getList: (state: MoviesListState): number[] => {
    return state.movies
  },
}
export default getters