import React from 'react'
import {connect} from 'react-redux'
import Home from './Home'
import {setFilmsToSlider, toggleIsFetching} from '../../Redux/homePageReducer'
import {Spinner} from 'reactstrap'
import {API} from '../api/api'


const mapStateToProps = state => {
    return {
        filmsToSlider: state.homePage.filmsToSlider,
        isFetching: state.homePage.isFetching,
    }
}

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        API.getFilms(20)
            .then(data => this.props.setFilmsToSlider(data.results))
            .then(this.props.toggleIsFetching(false))

    }

    componentWillUnmount() {
        this.props.setFilmsToSlider([])
    }

    render() {
        return !this.props.filmsToSlider.length
            ? <div className="container"><Spinner color='danger'/></div>
            : (
                <div>
                    <Home {...this.props} />
                </div>
            )
    }
}


export default connect(mapStateToProps, {
    setFilmsToSlider, toggleIsFetching,
})(HomeContainer)