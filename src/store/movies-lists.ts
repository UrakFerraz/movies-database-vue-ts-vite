import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { MoviesListState, WasAdded } from '../interfaces/movies-list-state-iterface'

const getters = {
  wasAdded: (state: MoviesListState): WasAdded => {
    return (movieId: number) => state.movies.includes(movieId)
  },
  total: (state: MoviesListState): number => {
    return state.movies.length
  }
}
export const favorites = defineStore('favorites', {
  state: (): MoviesListState => ({
    movies: []
  }),
  getters,
  actions: {
    favoritePressed(id: number): void {
      if (this.wasAdded(id)) {
        this.movies.splice(this.movies.indexOf(id), 1);
      } else {
        this.movies.push(id)
        
      }
      console.log(this.movies);
    }
  }
})

export const toSee = defineStore('toSee', {
  state: (): MoviesListState => ({
    movies: []
  }),
  getters,
  actions: {
    toSeePressed(id: number): void {
      if (this.wasAdded(id)) {
        this.movies.splice(this.movies.indexOf(id), 1);
      } else {
        this.movies.push(id)
        
      }
      console.log(this.movies);
    }
  }
})