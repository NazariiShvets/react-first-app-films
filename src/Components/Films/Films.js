import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Spinner} from 'reactstrap'
import {Container} from '@material-ui/core'
import FilmsSlider from '../Common/FilmsSlider'
import {getAllFilmsToSliders, setInitialStateToFilms} from '../../Redux/filmsPageReducer'


const mapStateToProps = state => ({
    filmsNowPlayingToSlider: state.filmsPage.filmsNowPlayingToSlider,
    filmsPopularToSlider: state.filmsPage.filmsPopularToSlider,
    filmsUpcomingToSlider: state.filmsPage.filmsUpcomingToSlider,
    filmsTopRatedToSlider: state.filmsPage.filmsTopRatedToSlider,
    isFetching: state.filmsPage.isFetching
})

const Films = ({isFetching, getAllFilmsToSliders, setInitialStateToFilms, ...props}) => {
    useEffect(() => {
        getAllFilmsToSliders(1)
        return () => {
            setInitialStateToFilms()
        }
    }, [])
    if (isFetching) {
        return <div className="container"><Spinner color='danger'/></div>
    }
    return (
        <Container>
            <FilmsSlider films={props.filmsNowPlayingToSlider}/>
            <FilmsSlider films={props.filmsPopularToSlider}/>
            <FilmsSlider films={props.filmsTopRatedToSlider}/>
            <FilmsSlider films={props.filmsUpcomingToSlider}/>
        </Container>
    )
}

export default connect(mapStateToProps, {getAllFilmsToSliders, setInitialStateToFilms})(Films)
