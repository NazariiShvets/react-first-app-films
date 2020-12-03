import React from 'react'
import {connect} from 'react-redux'
import Films from './Films'
import {
    setNowPlayingFilmToSlider,
    setPopularFilmToSlider,
    setTopRatedFilmToSlider,
    setUpcomingFilmToSlider,
    toggleIsFetching
} from '../../Redux/filmsPageReducer'
import {API} from '../api/api'
import {Spinner} from 'reactstrap'


const mapStateToProps = state => {
    return {
        filmsNowPlayingToSlider: state.filmsPage.filmsNowPlayingToSlider,
        filmsPopularToSlider: state.filmsPage.filmsPopularToSlider,
        filmsUpcomingToSlider: state.filmsPage.filmsUpcomingToSlider,
        filmsTopRatedToSlider: state.filmsPage.filmsTopRatedToSlider,
        isFetching: state.filmsPage.isFetching
    }
}

class FilmsContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        API.getNowPlayingMovies().then(data => {
            this.props.setNowPlayingFilmToSlider(data.results)
            return data
        })
            .then(API.getPopularMovies().then(data => {
                this.props.setPopularFilmToSlider(data.results)
                return data
            }))
            .then(API.getTopRatedMovies().then(data => {
                this.props.setTopRatedFilmToSlider(data.results)
                return data
            }))
            .then(API.getUpcomingMovies().then(data => {
                this.props.setUpcomingFilmToSlider(data.results)
                return data
            }))
            .then(this.props.toggleIsFetching(false))
    }

    render() {
        return !this.props.filmsUpcomingToSlider.length
            ? (<div className='container'><Spinner color='danger'/></div>)
            : (
                <div>
                    <Films {...this.props}  />
                </div>
            )
    }
}

export default connect(mapStateToProps, {
    setNowPlayingFilmToSlider,
    setPopularFilmToSlider,
    setUpcomingFilmToSlider,
    setTopRatedFilmToSlider,
    toggleIsFetching
})(FilmsContainer)
