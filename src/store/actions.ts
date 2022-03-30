import MoviesListStorage from "./localStorage";
import firebaseURL from '../modules/firebase-database-url'
import { MoviesListState } from "../interfaces/movies-list-state-iterface";
const firebaseList = `${firebaseURL}/movies.json`
const FavoriteListMoviesStorage = new MoviesListStorage("Favorite Movies");
const ToSeeListMoviesStorage = new MoviesListStorage("To See Movies");

type StorageName = "favorites" | "to-see"
export function addOrRemoveMovie(this: MoviesListState): (id: number, storageName: StorageName) => void {
	return (id, storageName) => {
		if (storageName === "favorites") {
			FavoriteListMoviesStorage.addMovie(id);
		}
		if (storageName === 'to-see') {
			ToSeeListMoviesStorage.addMovie(id);
		}
		if (this.movies.includes(id)) {
			this.movies.splice(this.movies.indexOf(id), 1);
		} else {
			this.movies.push(id)
		}
	}
};

export async function getMoviesListDatabase(this: MoviesListState, storageName: StorageName) {
	try {
			const request = await fetch(firebaseList)
			if (request.ok) {
				const data = await request.json()
				let dataToJSON: number[] = []
				if (storageName === "favorites") {
					dataToJSON = JSON.parse(data.favorites)
				}
				if (storageName === "to-see") {
					dataToJSON = JSON.parse(data.toSee)
				}				
				dataToJSON.forEach((id: string | number) => {
					const idNumberType = Number(id)
					if (storageName === "favorites") {
						FavoriteListMoviesStorage.addMovie(idNumberType);
					}
					if (storageName === 'to-see') {
						ToSeeListMoviesStorage.addMovie(idNumberType);
					}
					if (this.movies.includes(idNumberType)) {
						return
					} else {
						this.movies.push(idNumberType)
					}
				});
			}
		} catch (error) {
			console.log('erro de import do firebase', error);
		}
}