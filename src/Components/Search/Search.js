import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Spinner} from 'reactstrap'
import {searchFilms, setCurrentPage, setInitialState, setSearchText, toggleBtn} from '../../Redux/searchReducer'
import SearchResults from './SearchResults'


const Search = ({searchText, currentPage, searchType, setInitialState, searchFilms, ...props}) => {
    const [inputText, setInputText] = useState('')

    const paginationHandler = (e) => {
        props.setCurrentPage(+e.target.innerText)
    }
    const inputHandler = event => {
        setInputText(event.target.value)
    }
    const btnHandler = event => {
        props.toggleBtn(true)
        props.setCurrentPage(1)
        props.setSearchText(inputText)
    }
    useEffect(() => () => {
        setInitialState()
    }, [setInitialState])
    useEffect(() => {
        if (searchText.startsWith(' ')) return
        if (searchText) {
            searchFilms(searchText, currentPage, searchType)
        }
    }, [searchText, currentPage, searchFilms, searchType])
    return (<>
        <div className='container container-flex-mt3'>
            <input type='text' className='p-3' onChange={inputHandler} value={inputText}/>
            <button className='btn btn-danger ml-3 p-3' onClick={btnHandler} name='FILMS'>Искать</button>
        </div>
        {props.isBtnPressed ? !props.isShowResults
            ? <div className={'container'}><Spinner/></div>
            : <SearchResults currentPage={currentPage}
                             paginationHandler={paginationHandler}
                             {...props} />
            : null}
    </>)
}

const mapStateToProps = state => ({
    currentPage: state.search.currentPage,
    searchText: state.search.searchText,
    totalPages: state.search.totalPages,
    totalResults: state.search.totalResults,
    searchResults: state.search.searchResults,
    isBtnPressed: state.search.isBtnPressed,
    isFetching: state.search.isFetching,
    isShowResults: state.search.isShowResults,
})


export default connect(mapStateToProps, {
    toggleBtn, setSearchText, searchFilms, setInitialState, setCurrentPage
})(Search)