import React from 'react'
import {API} from "../api/api";
import {Button} from "reactstrap";
import './FilmCard.scss'

const formatedNum = num => {
    // insert 6000000 , output 6 000 000
    return num.toString().split('').reverse().map((num, id) => !(id % 3) ? `${num} ` : num).reverse().join('')
}

const numOrNotEnought = num => {
    const fnum = formatedNum(num)
    return fnum === '0 '
        ? `Not enough data`
        : `${fnum} $`
}
const FilmCard = props => {
    const {film} = props
    const genres = film.genres.map(genre => genre.name).join(', ')
    const realeaseFormatedDate = film.release_date.split('-').reverse().join(' / ')
    return (
        <div className='film'>
            <img src={API.getPosterFilmURL(film)} height={`500`} alt=""/>
            <div className="film-info">
                <div className="film-info__name "><strong>Title</strong> : "{film.name || film.title}"</div>
                <div className="film-info__rating "><strong>Popularity</strong> : {film.popularity}</div>
                <div className="film-info__release-date "><strong>Realease date</strong> : {realeaseFormatedDate}</div>
                <div className="film-info__genres "><strong>Genres</strong> : {genres}</div>
                <div className="film-info__budget "><strong>Budget</strong> : {numOrNotEnought(film.budget)}</div>
                <div className="film-info__revenue"><strong>Revenue</strong> : {numOrNotEnought(film.revenue)}</div>
                <div className="film-info__genres "><strong>Overview</strong> : {film.overview}</div>
                <Button>Add to My Collection</Button>
            </div>
        </div>
    )
}

export default FilmCard