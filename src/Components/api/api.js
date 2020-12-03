import * as axios from 'axios'


const API_KEY = process.env.REACT_APP_API_KEY
// const NO_IMG = 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484032.jpg'
const PATH = `https://image.tmdb.org/t/p/w1280`

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
})

const getPosterAndImgs = results => results.map(film => {
    film.poster_path = `${PATH}${film.poster_path}`
    film.backdrop_path = `${PATH}${film.backdrop_path}`
    return film
})


export const API = {
    getFilms(amount = 20) {
        return instance.get(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&append_to_response=images`)
            .then(res => {
                res.data.results = res.data.results.slice(0, amount)
                res.data.results = getPosterAndImgs(res.data.results)
                return res.data
            })
    },
    getFilmInfo(type = 'tv', id) {
        return instance.get(`${type}/${id}?api_key=${API_KEY}`)
            .then(res => {
                res.data.poster_path = `${PATH}${res.data.poster_path}`
                res.data.backdrop_path = `${PATH}${res.data.backdrop_path}`
                return res.data
            })
    },
    //Get a list of upcoming movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
    getUpcomingMovies(page = 1) {
        return instance.get(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)
            .then(res => {
                res.data.results = getPosterAndImgs(res.data.results)
                res.data.results[0].genre = 'Upcoming'
                return res.data
            })
    },
    //Get the top rated movies on TMDb.
    getTopRatedMovies(page = 1) {
        return instance.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
            .then(res => {
                res.data.results = getPosterAndImgs(res.data.results)
                res.data.results[0].genre = 'Top Rated'
                return res.data
            })
    },
    //Get a list of the current popular movies on TMDb. This list updates daily.
    getPopularMovies(page = 1) {
        return instance.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
            .then(res => {
                res.data.results = getPosterAndImgs(res.data.results)
                res.data.results[0].genre = 'Popular'
                return res.data
            })
    },
    //Get a list of movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
    getNowPlayingMovies(page = 1) {
        return instance.get(`movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`)
            .then(res => {
                res.data.results = getPosterAndImgs(res.data.results)
                res.data.results[0].genre = 'Now Playing'
                return res.data
            })
    },
    searchFilms(text, page = 1) {
        return instance.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=${page}`)
            .then(res => {
                res.data.results = getPosterAndImgs(res.data.results)
                return res.data
            })
    }
}

