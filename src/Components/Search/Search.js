import React from 'react'
import {NavLink} from 'react-router-dom'
import './Search.scss'
import {Button} from 'reactstrap'


const IMG_HEIGHT = '200'

const Search = props => {
    console.log(props)
    if (!props.films.length) return <div className='container'>Unfortunately no results were found. Change your request
        and try again</div>
    return (
        <div className='container'>
            {props.films.map((film,id) => (
                <div key={id} className='container'>
                    <NavLink  to={`/info/${film.id}`} className='navLink'>
                        <div className="wrapper-content">
                            <img src={film.poster_path}
                                 className='search-img'
                                 height={IMG_HEIGHT}
                                 alt={film.original_title}/>
                            <div className="content">
                                <div className="film-info__name "><strong>Title</strong> : "{film.name || film.title}"
                                </div>
                                <div className="film-info__rating "><strong>Popularity</strong> : {film.popularity}
                                </div>
                                <div className="film-info__genres "><strong>Overview</strong> : {film.overview || 'Not enought info'}</div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            ))}
            <Button onClick={props.showMoreButtonHandler}>Show more</Button>
        </div>
    )
}

export default Search
