import React from 'react'
import './Search.scss'


const SearchPagination = ({paginationHandler, totalPages, currentPage, ...props}) => {
    const firstBtnHandler = () => {
        props.setCurrentPage(1)
    }
    const lastBtnHandler = () => {
        props.setCurrentPage(totalPages)
    }
    return (
        <div className='container-for-pagination'>
            <div className='container-for-buttons-of-pagination'>
                <button className='btn-pagination' onClick={firstBtnHandler}>First Page</button>
                {currentPage > 2 && <span className='btn-pagination' onClick={paginationHandler}>
                                        {currentPage - 2}
                                    </span>}
                {currentPage > 1 && <span className='btn-pagination' onClick={paginationHandler}>
                                        {currentPage - 1}
                                    </span>}
                {currentPage > 0 && <span className='btn-pagination active' onClick={paginationHandler}>
                                        {currentPage}
                                    </span>}
                {currentPage < totalPages && <span className='btn-pagination' onClick={paginationHandler}>
                                        {currentPage + 1}
                                    </span>}
                {currentPage + 1 < totalPages && <span className='btn-pagination' onClick={paginationHandler}>
                                        {currentPage + 2}
                                    </span>}
                <button className='btn-pagination' onClick={lastBtnHandler}>Last Page</button>
            </div>
        </div>)
}

export default SearchPagination