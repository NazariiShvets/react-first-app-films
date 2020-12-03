import React from 'react'
import {connect} from 'react-redux'
import Search from './Search'
import {Spinner} from 'reactstrap'
import {incrementCurrentPage, setNewFilmsToFilms} from '../../Redux/headerReducer'
import {API} from '../api/api'


const mapStateToProps = state => {
    return {
        inputText: state.header.inputText,
        formatedText: state.header.inputText.split(' ').join('%20'),
        totalPages: state.header.totalPages,
        totalResults: state.header.totalResults,
        currentPage: state.header.currentPage,
        films: state.header.films,
        isFetching: state.header.isFetching,
    }
}
//
//
// FIX SHOW MORE!!!!!!!
//
//
class SearchContainer extends React.Component {

    showMoreButtonHandler() {
        const formatText = this.props.match.params.searchText.split(' ').join('%20')
        this.setState(this.props.currentPage + 1).then(
            API.searchFilms(formatText, this.props.currentPage)
                .then(data => {
                    debugger
                    this.props.setNewFilmsToFilms(data.results)
                    this.props.incrementCurrentPage()
                }))
    }

    render() {
        return !this.props.currentPage
            ? (<div className='container'><Spinner color='danger'/></div>)
            : (
                <div>
                    <Search {...this.props} showMoreButtonHandler={this.showMoreButtonHandler.bind(this)}/>
                </div>
            )
    }
}

export default connect(mapStateToProps, {setNewFilmsToFilms, incrementCurrentPage})(SearchContainer)


