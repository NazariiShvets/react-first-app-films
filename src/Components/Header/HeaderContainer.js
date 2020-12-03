import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {
    clearInputText,
    setCurrentPage,
    setFilms,
    setTextToInput,
    setTotalPages,
    setTotalResults, toggleIsFetching,
} from '../../Redux/headerReducer'
import {API} from '../api/api'

const mapStateToProps = state => {
    return {
        inputText: state.header.inputText,
        formatedText: state.header.inputText.split(' ').join('%20'),
        totalPages : state.header.totalPages,
        totalResults : state.header.totalResults,
        currentPage : state.header.currentPage,
        films : state.header.films,
        isFetching : state.header.isFetching,
    }
}

class HeaderContainer extends React.Component {

    buttonHandler = () => {
        API.searchFilms(this.props.formatedText).then(data => {
            this.props.setFilms(data.results || [])
            this.props.setTotalPages(data.total_pages || 0)
            this.props.setTotalResults(data.total_results || 0)
            this.props.setCurrentPage(data.page || 0)
        }).then(this.props.clearInputText())

    }

    render() {
        return (
            <>
                <Header {...this.props} buttonHandler={this.buttonHandler} />
            </>
        )
    }
}


export default connect(mapStateToProps, {
    setTextToInput, clearInputText,setFilms,setTotalPages,setTotalResults,setCurrentPage,toggleIsFetching
})(withRouter(HeaderContainer))