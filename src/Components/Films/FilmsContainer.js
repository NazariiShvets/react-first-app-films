import React from 'react'
import {connect} from "react-redux";
import Films from "./Films";
import {setFilmsAC} from "../../Redux/filmsPageReducer";

const mapStateToProps = state => {
    return {
        films: state.filmsPage.films
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFilms : (films) => {
            dispatch( setFilmsAC(films) )
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Films)
