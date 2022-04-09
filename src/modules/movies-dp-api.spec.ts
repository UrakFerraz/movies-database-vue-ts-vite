import TMDB from './tmdb'
import MovieDatabase from './movies-db-api'
import genres from '../assets/genres'
const testApi = new MovieDatabase(470)

describe('deve testar os parâmetros das URLS', () => {
	it('deve ser o prefixo da url do TMDB', () => {
		expect(testApi.apiURL).toBe('https://api.themoviedb.org/3')
	});
	it('deve ser a string de API_KEY', () => {
		expect(testApi.API_KEY).toBe(TMDB)
	})
	it('deve ser a linguagem padrão', () => {
		expect(testApi.defaultLanguage).toBe('language=pt-BR')
	});
})

describe('deve testas as urls', () => {
	it('deve ser a url de lista de gêneros', () => {
		expect(testApi.genresListUrl).toBe(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB}&language=pt-BR`)
	});
	it('deve ser a url dos filmes atuais', () => {
		expect(testApi.nowPlayingMoviesUrl).toBe(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB}&language=pt-BR&page=1`)
	});
	it('deve ser a url de filmes + populares', () => {
		expect(testApi.popularMoviesUrl).toBe(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB}&language=pt-BR&page=1`)
	});
	it('deve ser a url de filmes + votaods', () => {
		expect(testApi.topRatedMoviesUrl).toBe(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB}&language=pt-BR&page=1`)
	});
	it('deve ser a url de próximos lançamentos', () => {
		expect(testApi.upcomingMoviesUrl).toBe(`https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB}&language=pt-BR&page=1`)
	});
	it('deve ser a url dos detalhes dos filmes', () => {
		expect(testApi.movieDetailsUrl).toBe(`https://api.themoviedb.org/3/movie/${testApi.movieId}?api_key=${TMDB}&language=pt-BR`)
	});
	it('deve ser a url dos créditos dos filmes', () => {
		expect(testApi.movieCreditsUrl).toBe(`https://api.themoviedb.org/3/movie/${testApi.movieId}/credits?api_key=${TMDB}&language=pt-BR`)
	});
	it('deve ser a url de filmes similares', () => {
		expect(testApi.similarMoviesUrl).toBe(`https://api.themoviedb.org/3/movie/${testApi.movieId}/similar?api_key=${TMDB}&language=pt-BR&page=1`)
	});
	it('deve ser a url de imagens do filme', () => {
		expect(testApi.movieImagesUrl).toBe(`https://api.themoviedb.org/3/movie/${testApi.movieId}/images?api_key=${TMDB}&language=pt-BR`)
	});
	it('deve ser a url de videos dos filmes ', () => {
		expect(testApi.movieVideosUrl).toBe(`https://api.themoviedb.org/3/movie/${testApi.movieId}/videos?api_key=${TMDB}&language=pt-BR`)
	});
	it('deve ser a url de ids externos', () => {
		expect(testApi.movieExternalIdsUrl).toBe(`https://api.themoviedb.org/3/movie/${testApi.movieId}/extenal_ids?api_key=${TMDB}`)
	});
	it('deve ser a url de gênero', () => {
		expect(testApi.getGenreUrl(1, '35')).toBe(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`)
	})
	it('deve ser a url da pessoa', () => {
		expect(testApi.getCastPersonDetailsURL(1158)).toBe(`https://api.themoviedb.org/3/person/1158?api_key=${TMDB}&language=pt-BR`)
	})
	it('deve ser a url de filmes da pessoa', () => {
	expect(testApi.getCastPersonMoviesURL(1158)).toBe(`https://api.themoviedb.org/3/person/1158/movie_credits?api_key=${TMDB}&language=pt-BR`)
	})
	it('deve ser a url das imagens da pessoa', () => {
		expect(testApi.getCastPersonImages(1158)).toBe(`https://api.themoviedb.org/3/person/1158/images?api_key=${TMDB}`)
  })
})