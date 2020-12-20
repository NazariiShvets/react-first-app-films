import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Spinner} from 'reactstrap'
import HomeSlider from './HomeSlider'
import {getFilms, setInitialStateToHome} from '../../Redux/homePageReducer'


const FETCH_FILMS_COUNT = 20

const mapStateToProps = state => ({
    filmsToSlider: state.homePage.filmsToSlider,
    isFetching: state.homePage.isFetching,
})

const Home = ({isFetching, setInitialStateToHome, filmsToSlider, getFilms, ...props}) => {
    useEffect(() => {
        getFilms(FETCH_FILMS_COUNT)
        return () => {
            setInitialStateToHome()
        }
    }, [FETCH_FILMS_COUNT])
    if (isFetching) {
        return <div className="container"><Spinner color='danger'/></div>
    }
    return <HomeSlider filmsToSlider={filmsToSlider}/>
}


export default connect(mapStateToProps, {getFilms, setInitialStateToHome})(Home)