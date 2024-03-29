import APIDefaultInfo from './default-api-info';
export default class MovieDatabase extends APIDefaultInfo {
	constructor(private readonly _movieId: number) {
		super()
	}
	get movieId(): number {
		return this._movieId
	}
	get movieDetailsUrl(): string {
		return `${this.apiURL}/movie/${this.movieId}?api_key=${this.API_KEY}&${this.defaultLanguage}`
	}
	get movieCreditsUrl(): string {
		return `${this.apiURL}/movie/${this.movieId}/credits?api_key=${this.API_KEY}&${this.defaultLanguage}`
	}
	get similarMoviesUrl(): string {
		return `${this.apiURL}/movie/${this.movieId}/similar?api_key=${this.API_KEY}&${this.defaultLanguage}&page=1`
	}
	get movieImagesUrl(): string {
		return `${this.apiURL}/movie/${this.movieId}/images?api_key=${this.API_KEY}&${this.defaultLanguage}`
	}
	get movieVideosUrl(): string {
		return `${this.apiURL}/movie/${this.movieId}/videos?api_key=${this.API_KEY}&${this.defaultLanguage}`
	}
	get movieExternalIdsUrl(): string {
		return `${this.apiURL}/movie/${this.movieId}/extenal_ids?api_key=${this.API_KEY}`
	}
}