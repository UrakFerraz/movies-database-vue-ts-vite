export interface MoviesListState {
  movies: number[]
}
export type WasAdded = (id: number) => boolean
export type WasAddedValue = { wasAdded: (id: number) => boolean }
export type Total = { total: (state: MoviesListState) => number, wasAdded: (id: number) => boolean }
export type GetList = { getList: (state: MoviesListState) => number[] }
export type AddOrRemoveMovie = { addOrRemoveMovie: (id: number, storageName: "favorites" | "to-see") => void }
export type MovieStoreMethods = AddOrRemoveMovie & WasAddedValue