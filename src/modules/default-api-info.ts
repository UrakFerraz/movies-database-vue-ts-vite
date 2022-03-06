export default class APIDefaultInfo {
	public readonly _apiURL: string = 'https://api.themoviedb.org/3'
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
		return `https://api.themoviedb.org/3/person/${castPersonId}?api_key=a152faf46b825f190ee05ae333705f56&${this.defaultLanguage}`
	}
	getCastPersonMoviesURL(castPersonId: number | string): string {
		return `https://api.themoviedb.org/3/person/${castPersonId}/movie_credits?api_key=a152faf46b825f190ee05ae333705f56&${this.defaultLanguage}`
	}
	getCastPersonTvURL(castPersonId: number | string): string {
		return `https://api.themoviedb.org/3/person/${castPersonId}/tv_credits?api_key=a152faf46b825f190ee05ae333705f56&${this.defaultLanguage}`
	}
	fetchData = async (url: string) => {
		const response = await fetch(url)
		const data = await response.json()
		console.log(url);
		
		console.log(data);
		return data
	}
}