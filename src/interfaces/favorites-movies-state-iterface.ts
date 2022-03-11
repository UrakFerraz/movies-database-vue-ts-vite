export interface FavMoviesState {
  movies: number[]
}

export type IsFavorite = (id: number) => boolean