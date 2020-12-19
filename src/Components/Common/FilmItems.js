import React from 'react'
import {NavLink} from 'react-router-dom'


const FilmItems = ({films}) => (
    films.map(film =>
        <div className='wrapper-content' key={film.id}>
            <div>
                <NavLink to={`/info/${film.id}`}>
                    <img src={film.poster_path} width='150' alt=""/>
                </NavLink>
            </div>
            <div className='search-content'>
                <div className='search-content--item'>Title : "{film.title}"</div>
                <div className='search-content--item'>Original Title : "{film.original_title}"</div>
                <div className='search-content--item'>Overview : "{film.overview}"</div>
                <NavLink to={`/info/${film.id}`} className='btn btn-light'>See details</NavLink>
            </div>
        </div>
    )
)

export default FilmItems