import React from 'react'
import {connect} from "react-redux";
import {setFilm, toggleIsFetching} from "../../Redux/filmCardReducer";
import {API} from "../api/api";
import {Spinner} from "reactstrap";
import FilmCard from "./FilmCard";


const mapStateToProps = state => {
    return {
        film: state.filmCard.film,
        isFetching: state.filmCard.isFetching
    }
}

class FilmCardContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        API.getFilmInfo('movie', this.props.match.params.id)
            .then(response => this.props.setFilm(response))
            .then(this.props.toggleIsFetching(false))
    }

    componentWillUnmount() {
        this.props.setFilm({})
    }

    render() {
        return !Object.keys(this.props.film).length
            ? <Spinner color="danger"/>
            : (
                <div className='container'>
                    <FilmCard {...this.props} />
                </div>
            );
    }
}


export default connect(mapStateToProps, {
    setFilm, toggleIsFetching,
})(FilmCardContainer)