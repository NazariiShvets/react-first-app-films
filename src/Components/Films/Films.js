import React from 'react'

import FilmsSlider from './FilmsSlider'
import './Films.scss'


export const Films = props => {
    return (
        <div className='container'>
            <FilmsSlider films={props.filmsNowPlayingToSlider}/>
            <FilmsSlider films={props.filmsPopularToSlider}/>
            <FilmsSlider films={props.filmsTopRatedToSlider}/>
            <FilmsSlider films={props.filmsUpcomingToSlider}/>
        </div>
    )
}

export default Films
