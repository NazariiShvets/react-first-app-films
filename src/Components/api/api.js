import * as axios from 'axios'

// TopRated         https://api.themoviedb.org/3/movie/top_rated?api_key=6f870c3cedf60872853be1be2a364c56&language=en-US&page=1
// NowPlaing        https://api.themoviedb.org/3/movie/now_playing?api_key=6f870c3cedf60872853be1be2a364c56&language=en-US&page=1
// Popular          https://api.themoviedb.org/3/movie/popular?api_key=6f870c3cedf60872853be1be2a364c56&language=en-US&page=1
// Upcoming         https://api.themoviedb.org/3/movie/upcoming?api_key=6f870c3cedf60872853be1be2a364c56&language=en-US&page=1
// ImageCurrentFilm https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
const instanse = axios

export const API = {
    getFilms(amount = 20) {
        return instanse.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&append_to_response=images`)
            .then(response => {
                response.data.results = response.data.results.slice(0, amount)
                return response.data
            })
    },
    getImageFilmURL(film) {
        if (!film.backdrop_path) return 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484032.jpg'
        return `https://image.tmdb.org/t/p/w1280${film.backdrop_path}`
    },
    getPosterFilmURL(film) {
        if (!film.poster_path) return 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484032.jpg'
        return `https://image.tmdb.org/t/p/original${film.poster_path}`
    },
    getFilmInfo(type = 'tv', id) {
        return instanse.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.data)
    },
}

