export interface MoviesListState {
  movies: number[]
}

export type WasAdded = (id: number) => boolean