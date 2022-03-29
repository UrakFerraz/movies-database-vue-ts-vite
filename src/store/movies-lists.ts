import { defineStore } from 'pinia'
import { MoviesListState } from '../interfaces/movies-list-state-iterface'
import getters from './getters';
import { addOrRemoveMovie, getMoviesListDatabase } from './actions';
export type StatesNames = 'favorites' | 'to-see'

export const favorites = defineStore('favorites', {
  state: (): MoviesListState => ({
    movies: []
  }),
  getters,
  actions: {
    addOrRemoveMovie,
    getMoviesListDatabase
  }
})

export const toSee = defineStore('to-see', {
  state: (): MoviesListState => ({
    movies: []
  }),
  getters,
  actions: {
    addOrRemoveMovie,
    getMoviesListDatabase
  }
})