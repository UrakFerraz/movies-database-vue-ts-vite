import CollectionInterface from "./collection-interface";
import GenresInterface from "./genres-interface";
import ProductionCompanyInterface from "./production-company-interface";
import ProductionCountryInterface from "./production-country-interface";
import SpokenLanguagesInterface from "./spoken-language-interface";

export default interface MovieInterface {
    adult: boolean,
    backdrop_path: null | string,
    belongs_to_collection: null | CollectionInterface[],
    budget: number,
    genres: GenresInterface[],
    homepage: null | string,
    id: number,
    imdb_id: null | string,
    original_language: string,
    original_title: string,
    overview: null | string,
    popularity: number,
    poster_path: null | string,
    production_companies: ProductionCompanyInterface[],
    production_countries: ProductionCountryInterface[],
    release_date: string,
    revenue: number,
    runtime: null | number,
    spoken_languages: SpokenLanguagesInterface[],
    status: string,
    tagline: null | string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}