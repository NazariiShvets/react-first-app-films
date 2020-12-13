import * as axios from 'axios'


const API_KEY = process.env.REACT_APP_API_KEY
const NO_IMG = 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484032.jpg'
const PATH = `https://image.tmdb.org/t/p/w1280`

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
})

const getPosterAndImgs = results => results.map(film => {
    film.poster_path = film.poster_path ? `${PATH}${film.poster_path}` : NO_IMG
    film.backdrop_path = film.backdrop_path ? `${PATH}${film.backdrop_path}` : NO_IMG
    return film
})

export const filmAPI = {
    async getFilms(amount = 20) {
        try {
            const {data} = await instance.get(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&append_to_response=images`)
            data.results = data.results.slice(0, amount)
            data.results = getPosterAndImgs(data.results)
            return data
        } catch (e) {
            console.error('getFilms Fetch error : ', e)
        }
    },
    async getFilmInfo(type = 'tv', id) {
        try {
            let {data} = await instance.get(`${type}/${id}?api_key=${API_KEY}`);
            [data] = getPosterAndImgs([data])
            return data
        } catch (e) {
            console.error('getFilmInfo Fetch error : ', e)
        }
    },
    //Get a list of upcoming movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
    async getUpcomingMovies(page = 1) {
        try {
            const {data} = await instance.get(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            data.results[0].genre = 'Upcoming'
            return data
        } catch (e) {
            console.error('getUpcomingMovies Fetch error : ', e)
        }
    },
    //Get the top rated movies on TMDb.
    async getTopRatedMovies(page = 1) {
        try {
            const {data} = await instance.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            data.results[0].genre = 'Top Rated'
            return data
        } catch (e) {
            console.error('getTopRatedMovies Fetch error : ', e)
        }
    },
    //Get a list of the current popular movies on TMDb. This list updates daily.
    async getPopularMovies(page = 1) {
        try {
            const {data} = await instance.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            data.results[0].genre = 'Popular'
            return data
        } catch (e) {
            console.error('getPopularMovies Fetch error : ', e)
        }
    },
    //Get a list of movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
    async getNowPlayingMovies(page = 1) {
        try {
            const {data} = await instance.get(`movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            data.results[0].genre = 'Now Playing'
            return data
        } catch (e) {
            console.error('getNowPlayingMovies Fetch error : ', e)
        }
    },
    async searchFilms(text = '', page = 1) {
        try {
            const {data} = await instance.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=${page}`)
            data.results = getPosterAndImgs(data.results)
            return data
        } catch (e) {
            console.error('searchFilms Fetch error : ', e)
        }
    },
}

