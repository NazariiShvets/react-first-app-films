import React from 'react'
import {NavLink} from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import './Common.scss'


const IMG_HEIGHT = 130

const FilmsSlider = ({films, ...props}) => {
    const filmsToShow = films.map(film =>
        <NavLink key={film.id} to={`/info/${film.id}`}>
            <img src={film.poster_path} height={IMG_HEIGHT} alt={film.original_title}/>
        </NavLink>
    )
    return (
        <div className="films__row">
            <div className="films__row--title">{films[0].genre}</div>
            <Carousel itemsToShow={10}
                      pagination={false}
                      enableSwipe={false}
                      enableAutoPlay={false}
                      itemsToScroll={1}
            >
                {filmsToShow}
            </Carousel>
        </div>
    )
}

export default FilmsSlider
