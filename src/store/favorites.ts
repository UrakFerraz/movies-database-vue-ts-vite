import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { MoviesListState, WasAdded } from '../interfaces/movies-list-state-iterface'

export const favorites = defineStore('favorites', {
  state: (): MoviesListState => ({
    movies: [414906, 634649]
  }),
  getters: {
    wasAdded: (state: MoviesListState): WasAdded => {
      return (movieId: number) => state.movies.includes( movieId)
    },
    favoritesTotal: (state: MoviesListState): number => {
      return state.movies.length
    }
  },
  actions: {
    favoritePressed(id: number): void {
      console.log(this.movies);
      
      if (this.wasAdded(id)) {
        this.movies.splice(this.movies.indexOf(id), 1);
      } else {
        this.movies.push(id)
        
      }
    }
  }
})

export const toSee = defineStore('toSee', {
  state: (): MoviesListState => ({
    movies: [414906, 634649]
  }),
  getters: {
    wasAdded: (state: MoviesListState): WasAdded => {
      return (movieId: number) => state.movies.includes( movieId)
    },
    toSeeTotal: (state: MoviesListState): number => {
      return state.movies.length
    }
  },
  actions: {
    toSeePressed(id: number): void {
      console.log(this.movies);
      
      if (this.wasAdded(id)) {
        this.movies.splice(this.movies.indexOf(id), 1);
      } else {
        this.movies.push(id)
        
      }
    }
  }
})