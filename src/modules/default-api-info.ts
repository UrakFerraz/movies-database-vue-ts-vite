import TMDB from './tmdb'
export default class APIDefaultInfo {
	public readonly _apiURL: string = 'https://api.themoviedb.org/3'
	private readonly _API_KEY: string = TMDB
	private readonly _defaultLanguage: string = 'language=pt-BR'
	get apiURL(): string {
		return this._apiURL
	}
	get API_KEY(): string {
		return this._API_KEY
	}
	get defaultLanguage(): string {
		return this._defaultLanguage
	}
	get genresListUrl(): string {
		return `${this.apiURL}/genre/movie/list?api_key=${this.API_KEY}&${this.defaultLanguage}`
	}
	get nowPlayingMoviesUrl(): string {
		return `${this.apiURL}/movie/now_playing?api_key=${this.API_KEY}&${this.defaultLanguage}&page=1`
	}
	get popularMoviesUrl(): string {
		return `${this.apiURL}/movie/popular?api_key=${this.API_KEY}&${this.defaultLanguage}&page=1`
	}
	get topRatedMoviesUrl(): string {
		return `${this.apiURL}/movie/top_rated?api_key=${this.API_KEY}&${this.defaultLanguage}&page=1`
	}
	get upcomingMoviesUrl(): string {
		return `${this.apiURL}/movie/upcoming?api_key=${this.API_KEY}&${this.defaultLanguage}&page=1`
	}
	getGenreUrl(pageNumber: number, genreName: string): string {
		return `${this.apiURL}/discover/movie?api_key=${this.API_KEY}&${this.defaultLanguage}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${genreName}`
	}
	getCastPersonDetailsURL(castPersonId: number | string): string {
		return `https://api.themoviedb.org/3/person/${castPersonId}?api_key=${this.API_KEY}&${this.defaultLanguage}`
	}
	getCastPersonMoviesURL(castPersonId: number | string): string {
		return `https://api.themoviedb.org/3/person/${castPersonId}/movie_credits?api_key=${this.API_KEY}&${this.defaultLanguage}`
	}
	getCastPersonImages(castPersonId: number | string): string {
		return `https://api.themoviedb.org/3/person/${castPersonId}/images?api_key=${this.API_KEY}`
	}

	searchMovies(query: string, pageNumber: number): string {
		console.log(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&${this.defaultLanguage}&query=${query}&page=${pageNumber}&include_adult=false`);
		
		return `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&${this.defaultLanguage}&query=${query}&page=${pageNumber}&include_adult=false`
	}
	fetchData = async (url: string) => {
		try {
			const response = await fetch(url)
			if (!response.ok) { throw response }
			const data = await response.json()
			return data
		} catch (error) {
			console.log('Erro na api do TMDB', error)
		}
	}
}