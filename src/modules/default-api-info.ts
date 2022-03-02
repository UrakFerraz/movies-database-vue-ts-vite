export default class APIDefaultInfo {
	public readonly _apiURL = 'https://api.themoviedb.org/3'
	private readonly _API_KEY: string = 'a152faf46b825f190ee05ae333705f56'
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
	get latestMoviesUrl(): string {
		return `${this.apiURL}/movie/latest/list?api_key=${this.API_KEY}&${this.defaultLanguage}`
	}
	get upcomingMoviesUrl(): string {
		return `${this.apiURL}/movie/upcoming/list?api_key=${this.API_KEY}&${this.defaultLanguage}`
	}
	static getGenreUrl(pageNumber: number, genreId: number): string {
		return `${this.apiURL}/movie/upcoming/list?api_key=${this.API_KEY}&${this.defaultLanguage}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${genreId}`
	}
}