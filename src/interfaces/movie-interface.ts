import CollectionInterface from "./collection-interface";
import GenresInterface from "./genres-interface";
import ProductionCompanyInterface from "./production-company-interface";
import ProductionCountryInterface from "./production-country-interface";
import SpokenLanguagesInterface from "./spoken-language-interface";

export default interface MovieInterface {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: CollectionInterface[],
    budget: number,
    genres: GenresInterface[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: ProductionCompanyInterface[],
    production_countries: ProductionCountryInterface[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: SpokenLanguagesInterface[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}