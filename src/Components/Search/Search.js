import React, {useEffect, useState} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {searchFilms, setCurrentPage, setInitialState, setSearchText, toggleBtn} from '../../Redux/searchReducer'
import {Spinner} from 'reactstrap'
import SearchResults from './SearchResults'


const Search = ({searchText, currentPage, setInitialState, searchFilms, ...props}) => {
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
        if (searchText.startsWith(' ')) {
            console.error('Enter a search again')
            return
        }
        if (searchText) {
            console.log('Start searching...')
            searchFilms(searchText, currentPage)
        }
    }, [searchText, currentPage, searchFilms])
    return (<>
            <div className='container mt-3 justify-content-center' style={{display: 'flex'}}>
                <input type='text' style={{padding: 10}} onChange={inputHandler} value={inputText}/>
                <button className='btn btn-danger' style={{paddingLeft: 25, paddingRight: 25, marginLeft: 10}}
                        onClick={btnHandler}>Искать
                </button>
            </div>
            {props.isBtnPressed ? !props.isShowResults
                ? <div className={'container'}><Spinner/></div>
                : <SearchResults currentPage={currentPage}
                                 paginationHandler={paginationHandler}
                                 {...props} />
                : null}
        </>
    )
}

const mapStateToProps = state => ({
    currentPage: state.search.currentPage,
    isBtnPressed: state.search.isBtnPressed,
    searchText: state.search.searchText,
    totalPages: state.search.totalPages,
    totalResults: state.search.totalResults,
    searchResults: state.search.searchResults,
    isFetching: state.search.isFetching,
    isShowResults: state.search.isShowResults,
})


export default compose(
    connect(mapStateToProps, {toggleBtn, setSearchText, searchFilms, setInitialState, setCurrentPage})
)(Search)