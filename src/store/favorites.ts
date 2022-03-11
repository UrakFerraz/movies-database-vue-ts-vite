import { defineStore } from 'pinia'
import { ref } from 'vue'
import { FavMoviesState, IsFavorite } from '../interfaces/favorites-movies-state-iterface'

export const favorites = defineStore('favorites', {
  state: (): FavMoviesState => ({
    movies: [414906, 634649]
  }),
  getters: {
    isFavorite: (state: FavMoviesState): IsFavorite => {
      return (movieId: number) => state.movies.includes( movieId)
    },
    favoritesTotal: (state: FavMoviesState): number => {
      return state.movies.length
    }
  },
  actions: {
    favoritePressed(id: number): void {
      console.log(this.movies);
      
      if (this.isFavorite(id)) {
        this.movies.splice(this.movies.indexOf(id), 1);
      } else {
        this.movies.push(id)
        
      }
    }
  }
})