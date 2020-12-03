import React from 'react'
import {NavLink} from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import './Films.scss'


const IMG_HEIGHT = 130

const FilmsSlider = props => {
    const films = props.films.map(film => <NavLink key={film.id} to={`/info/${film.id}`}>
        <img src={film.poster_path} height={IMG_HEIGHT} alt={film.original_title}/>
    </NavLink>)

    return (
        <div className="films__row">
            <div className="films__row--title">{props.films.length ? props.films[0].genre : null}</div>
            <div className="films__row--list">
                <div className="films__row--film">
                    <Carousel itemsToShow={10}
                              pagination={false}
                              enableSwipe={false}
                              enableAutoPlay={false}
                              itemsToScroll={1}
                    >
                            {films}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default FilmsSlider
