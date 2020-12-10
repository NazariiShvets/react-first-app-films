import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import HomeSlider from './HomeSlider'
import {getFilms, setFilmsToSlider} from '../../Redux/homePageReducer'
import {Spinner} from 'reactstrap'


const mapStateToProps = state => {
    return {
        filmsToSlider: state.homePage.filmsToSlider,
        isFetching: state.homePage.isFetching,
    }
}

const Home = ({isFetching, setFilmsToSlider, filmsToSlider, getFilms, ...props}) => {
    const FETCH_FILMS_COUNT = 20
    useEffect(() => {
        console.log('DidMount')
        getFilms(FETCH_FILMS_COUNT)

    }, [])
    useEffect(() => () => {
        console.log('DidUnmount')
        setFilmsToSlider([])
    },[])

    if (isFetching) {
        return <div className="container"><Spinner color='danger'/></div>
    }

    return (
        <>
            <HomeSlider filmsToSlider={filmsToSlider}/>
        </>
    )
}


export default connect(mapStateToProps, {
    getFilms, setFilmsToSlider
})(Home)