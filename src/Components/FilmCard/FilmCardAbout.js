import React from 'react'


// insert 6000000 , output 6 000 000
const formatedNum = num => num?.toString()?.split('')?.reverse()?.map((num, id) => !(id % 3) ? `${num} ` : num)?.reverse()?.join('')

const numOrNotEnough = num => {
    const fnum = formatedNum(num)
    return fnum === '0 ' ? `Not enough data` : `${fnum} $`
}

const FilmCardAbout = ({film}) => {
    const genres = film.genres.map(genre => genre.name).join(', ')
    const realeaseFormatedDate = (film?.release_date || film?.first_air_date).split('-').reverse().join(' / ')

    return (<>
        <div><strong>Title</strong> : "{film.title || film.name}"</div>
        <div><strong>Original Title</strong> : "{film.original_title || film.name}"</div>
        <div><strong>Popularity</strong> : {film.popularity}</div>
        <div><strong>Realease date</strong> : {realeaseFormatedDate}</div>
        <div><strong>Genres</strong> : {genres || 'Not enough data'}</div>
        <div><strong>Budget</strong> : {numOrNotEnough(film.budget)}</div>
        <div><strong>Revenue</strong> : {numOrNotEnough(film.revenue)}</div>
        <div><strong>Overview</strong> : {film.overview || 'Not enough info'}</div>
    </>)
}
export default FilmCardAbout