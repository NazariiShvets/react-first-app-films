import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Spinner} from 'reactstrap'
import './FilmCard.scss'
import Container from '@material-ui/core/Container'
import {getFilmInfo, setInitialStateToFilmCard} from '../../Redux/filmCardReducer'
import {Button} from '@material-ui/core'


const IMG_HEIGHT = 500
// insert 6000000 , output 6 000 000
const formatedNum = num => num.toString().split('').reverse().map((num, id) => !(id % 3) ? `${num} ` : num).reverse().join('')

const numOrNotEnought = num => {
    const fnum = formatedNum(num)
    return fnum === '0 '
        ? `Not enough data`
        : `${fnum} $`
}

const mapStateToProps = state => ({
    film: state.filmCard.film,
    isFetching: state.filmCard.isFetching
})

const FilmCard = ({getFilmInfo, setInitialStateToFilmCard, isFetching, film, ...props}) => {
    useEffect(() => {
        getFilmInfo(props.match.params.id)
        return () => {
            setInitialStateToFilmCard()
        }
    }, [props.match.params.id])
    if (isFetching) {
        return <Container><Spinner color="danger"/></Container>
    }
    const genres = film.genres.map(genre => genre.name).join(', ')
    const realeaseFormatedDate = film.release_date.split('-').reverse().join(' / ')

    return (
        <Container>
            <div className='film'>
                <div><img src={film.poster_path} height={IMG_HEIGHT} alt=""/></div>
                <div className="film-info">
                    <div><strong>Title</strong> : "{film.name || film.title}"</div>
                    <div><strong>Original Title</strong> : "{film.name || film.original_title}"</div>
                    <div><strong>Popularity</strong> : {film.popularity}</div>
                    <div><strong>Realease date</strong> : {realeaseFormatedDate}</div>
                    <div><strong>Genres</strong> : {genres}</div>
                    <div><strong>Budget</strong> : {numOrNotEnought(film.budget)}</div>
                    <div><strong>Revenue</strong> : {numOrNotEnought(film.revenue)}</div>
                    <div><strong>Overview</strong> : {film.overview || 'Not enought info'}</div>
                    <div>
                        <Button color='secondary' size='large'
                                variant='contained' style={{backgroundColor: '#db2428'}}
                        >Add to My Collection</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default connect(mapStateToProps, {
    setInitialStateToFilmCard, getFilmInfo,
})(FilmCard)