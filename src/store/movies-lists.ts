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
    },
    async getMoviesListDatabase() {
      try {
        const request = await fetch("https://movies-lists-3a7ad-default-rtdb.firebaseio.com/movies.json")
        if (request.ok) {
          const data = await request.json()
          const dataToJSON = JSON.parse(data.favorites)
          console.log(dataToJSON);
        }
      } catch (error) {
        console.log('erro de import do firebase', error);
        
      }
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