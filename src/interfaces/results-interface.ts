import MovieInListInerface from './movies-in-list-interface'

export default interface ResultsInterface {
	page: number,
	results: MovieInListInerface[],
	total_pages: number,
	total_results: number,
} 