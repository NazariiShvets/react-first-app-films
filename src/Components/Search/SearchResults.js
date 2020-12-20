import React from 'react'
import './Search.scss'
import SearchPagination from './SearchPagination'
import FilmItems from '../Common/FilmItems'


const SearchResults = ({...props}) => (
    <div className='container '>
        <span>Found {props.totalResults} results. Show {props.searchResults.length} on page {props.currentPage} . Total pages {props.totalPages}</span>
        <SearchPagination {...props} />
        <FilmItems films={props.searchResults}/>
        <SearchPagination {...props} />
    </div>
)

export default SearchResults
