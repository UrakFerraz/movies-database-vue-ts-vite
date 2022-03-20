import { defineStore } from 'pinia'
import { MoviesListState, WasAdded } from '../interfaces/movies-list-state-iterface'
import MoviesListStorage from "./localStorage";
const FavoriteListMoviesStorage = new MoviesListStorage("Favorite Movies");
const ToSeeListMoviesStorage = new MoviesListStorage("To See Movies");
import firebaseURL from '../modules/firebase-database-url'
import getters from './getters';
export type StatesNames = 'favorites' | 'toSee'

const firebaseList = `${firebaseURL}/movies.json`

export const favorites = defineStore('favorites', {
  state: (): MoviesListState => ({
    movies: []
  }),
  getters,
  actions: {
    favoritePressed(id: number): void {
      FavoriteListMoviesStorage.addMovie(id);
      if (this.wasAdded(id)) {
        this.movies.splice(this.movies.indexOf(id), 1);
      } else {
        this.movies.push(id)
        
      }
      console.log(this.movies);
    },
    async getMoviesListDatabase() {
      try {
        const request = await fetch(firebaseList)
        if (request.ok) {
          const data = await request.json()
          const dataToJSON = JSON.parse(data.favorites)
          dataToJSON.forEach((id: string) => {
            const idNumberType = Number(id)
            FavoriteListMoviesStorage.addMovie(idNumberType);
            if (this.movies.includes(idNumberType)) {
              return
            } else {
              this.movies.push(idNumberType)
            }
          });
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
      ToSeeListMoviesStorage.addMovie(id)
      if (this.wasAdded(id)) {
        this.movies.splice(this.movies.indexOf(id), 1);
      } else {
        this.movies.push(id)
        
      }
      console.log(this.movies);
    },
    async getMoviesListDatabase() {
      try {
        const request = await fetch(firebaseList)
        if (request.ok) {
          const data = await request.json()
          const dataToJSON = JSON.parse(data.toSee)
          dataToJSON.forEach((id: string) => {
            const idNumberType = Number(id)
            ToSeeListMoviesStorage.addMovie(idNumberType);
            if (this.movies.includes(idNumberType)) {
              return
            } else {
              this.movies.push(idNumberType)
            }
          });
          console.log(dataToJSON);
          console.log(this.movies);
          
        }
      } catch (error) {
        console.log('erro de import do firebase', error);
      }
    }
  }
})