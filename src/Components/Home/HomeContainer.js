import React from 'react'
import {connect} from "react-redux";
import Home from "./Home";
import {setFilmsToSlider, toggleIsFetching} from "../../Redux/homePageReducer";
import * as axios from "axios";
import {Spinner} from "reactstrap";

const mapStateToProps = state => {
    return {
        filmsToSlider: state.homePage.filmsToSlider,
        isFetching: state.homePage.isFetching,
    }
}

class HomeContainer extends React.Component {

    //
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get('https://api.themoviedb.org/3/discover/tv?api_key=6f870c3cedf60872853be1be2a364c56&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false')
            .then(this.props.toggleIsFetching(false))
            .then(response => this.props.setFilmsToSlider(response.data.results))

    }

    componentWillUnmount() {
        this.props.setFilmsToSlider([])
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Spinner color="danger"/>
                    : <Home filmsToSlider={this.props.filmsToSlider}/>}
            </>
        )
    }
}


export default connect(mapStateToProps, {setFilmsToSlider, toggleIsFetching})(HomeContainer)