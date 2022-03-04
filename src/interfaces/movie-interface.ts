import CollectionInterface from "./collection-interface";
import GenresInterface from "./genres-interface";
import ProductionCompanyInterface from "./production-company-interface";
import ProductionCountryInterface from "./production-country-interface";
import SpokenLanguagesInterface from "./spoken-language-interface";

export default interface MovieProtocol {
    "adult": boolean,
    "backdrop_path": string,
    "belongs_to_collection": CollectionInterface[],
    "budget": number,
    "genres": GenresInterface[],
    "homepage": string,
    "id": number,
    "imdb_id": string,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "poster_path": string,
    "production_companies": ProductionCompanyInterface[],
    "production_countries": ProductionCountryInterface[],
    "release_date": "2022-02-10",
    "revenue": 0,
    "runtime": 89,
    "spoken_languages": SpokenLanguagesInterface[],
    "status": string,
    "tagline": string,
    "title": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
}