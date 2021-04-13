import * as axios from 'axios'


const API_KEY = `api_key=cb9f0447c89ba62ae8b4e196468e5103`
const NO_IMG = 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484032.jpg'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
})

const getPosterAndImgs = results => results.map(film => {
    film.poster_path = film.poster_path ? `${IMG_PATH}${film.poster_path}` : NO_IMG
    film.backdrop_path = film.backdrop_path ? `${IMG_PATH}${film.backdrop_path}` : NO_IMG
    return film
})

export const filmAPI = {
    async getFilms(amount = 20) {
        try {
            const {data} = await instance.get(`discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&append_to_response=images`)
            data.results = data.results.slice(0, amount)
            data.results = getPosterAndImgs(data.results)
            return data
        } catch (e) {
            console.error('getFilms Fetch error : ', e)
        }
    },
    async getFilmInfo(type = 'tv', id) {
        try {
            let {data} = await instance.get(`${type}/${id}?${API_KEY}`);
            [data] = getPosterAndImgs([data])
            return data
        } catch (e) {
            console.error('getFilmInfo Fetch error : ', e)
        }
    },
    async getUpcomingMovies(page = 1) {
        try {
            const {data} = await instance.get(`movie/upcoming?${API_KEY}&language=en-US&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            data.results[0].genre = 'Upcoming'
            return data
        } catch (e) {
            console.error('getUpcomingMovies Fetch error : ', e)
        }
    },
    async getTopRatedMovies(page = 1) {
        try {
            const {data} = await instance.get(`movie/top_rated?${API_KEY}&language=en-US&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            data.results[0].genre = 'Top Rated'
            return data
        } catch (e) {
            console.error('getTopRatedMovies Fetch error : ', e)
        }
    },
    async getPopularMovies(page = 1) {
        try {
            const {data} = await instance.get(`movie/popular?${API_KEY}&language=en-US&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            data.results[0].genre = 'Popular'
            return data
        } catch (e) {
            console.error('getPopularMovies Fetch error : ', e)
        }
    },
    async getNowPlayingMovies(page = 1) {
        try {
            const {data} = await instance.get(`movie/now_playing?${API_KEY}&language=en-US&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            data.results[0].genre = 'Now Playing'
            return data
        } catch (e) {
            console.error('getNowPlayingMovies Fetch error : ', e)
        }
    },
    async searchFilms(text = '', page = 1) {
        try {
            const {data} = await instance.get(`search/movie?${API_KEY}&language=en-US&query=${text}&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            return data
        } catch (e) {
            console.error('searchFilms Fetch error : ', e)
        }
    },
    async searchTvs(text = '', page = 1) {
        try {
            const {data} = await instance.get(`search/movie?${API_KEY}&language=en-US&query=${text}&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            return data
        } catch (e) {
            console.error('searchFilms Fetch error : ', e)
        }
    },
    async getTopRatedTvs(page = 1) {
        try {
            const {data} = await instance.get(`tv/top_rated?${API_KEY}&language=en-US&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            data.results[0].genre = 'Top Rated'
            return data
        } catch (e) {
            console.error('Can`t fetch Top Rated Tvs . Error :', e)
        }
    },
    async getPopularTvs(page = 1) {
        try {
            const {data} = await instance.get(`tv/popular?${API_KEY}&language=en-US&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            data.results[0].genre = 'Popular'
            return data
        } catch (e) {
            console.error('Can`t fetch Popular Tvs. Error :', e)
        }
    },
    async getOnAirTvs(page = 1) {
        try {
            const {data} = await instance.get(`tv/on_the_air?${API_KEY}&language=en-US&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            data.results[0].genre = 'On air'
            return data
        } catch (e) {
            console.error('Can`t fetch On air tvs. Error :', e)
        }
    },
    async getAiringTodayTvs(page = 1) {
        try {
            const {data} = await instance.get(`tv/airing_today?${API_KEY}&language=en-US&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            data.results[0].genre = 'Airing Today'
            return data
        } catch (e) {
            console.error('Can`t fetch airing today tvs. Error :', e)
        }
    }
}