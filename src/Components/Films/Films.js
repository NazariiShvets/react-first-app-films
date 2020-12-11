import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Spinner} from 'reactstrap'
import FilmsSlider from './FilmsSlider'
import {getAllFilmsToSliders, setInitialStateToFilms} from '../../Redux/filmsPageReducer'
import './Films.scss'


const mapStateToProps = state => ({
    filmsNowPlayingToSlider: state.filmsPage.filmsNowPlayingToSlider,
    filmsPopularToSlider: state.filmsPage.filmsPopularToSlider,
    filmsUpcomingToSlider: state.filmsPage.filmsUpcomingToSlider,
    filmsTopRatedToSlider: state.filmsPage.filmsTopRatedToSlider,
    isFetching: state.filmsPage.isFetching
})

const Films = ({isFetching, getAllFilmsToSliders, setInitialStateToFilms, ...props}) => {
    useEffect(() => {
        getAllFilmsToSliders()
        return () => {
            setInitialStateToFilms()
        }
    }, [])
    if (isFetching) {
        return <div className="container"><Spinner color='danger'/></div>
    }
    return (
        <div className='container'>
            <FilmsSlider films={props.filmsNowPlayingToSlider}/>
            <FilmsSlider films={props.filmsPopularToSlider}/>
            <FilmsSlider films={props.filmsTopRatedToSlider}/>
            <FilmsSlider films={props.filmsUpcomingToSlider}/>
        </div>
    )
}

export default connect(mapStateToProps, {getAllFilmsToSliders, setInitialStateToFilms})(Films)
