import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Spinner} from 'reactstrap'
import Container from '@material-ui/core/Container'
import {Button} from '@material-ui/core'
import {getFilmInfo, setInitialStateToFilmCard, toggleIsFilmInCollection} from '../../Redux/filmCardReducer'
import FilmCardAbout from './FilmCardAbout'
import {removeFilmFromCollection, setFilmToCollection} from '../../Redux/myCollectionReducer'
import './FilmCard.scss'


const IMG_HEIGHT = 500

const mapStateToProps = state => ({
    film: state.filmCard.film,
    isFetching: state.filmCard.isFetching,
    isFilmInCollection: state.filmCard.isFilmInCollection,
})

const FilmCard = ({
                      getFilmInfo, setInitialStateToFilmCard, isFetching, film, setFilmToCollection,
                      removeFilmFromCollection, toggleIsFilmInCollection, isFilmInCollection, ...props
                  }) => {
    useEffect(() => {
        getFilmInfo(props.match.params.id)
        return () => {
            setInitialStateToFilmCard()
        }
    }, [props.match.params.id])
    if (isFetching) {
        return <Container><Spinner color="danger"/></Container>
    }
    const addBtnHandler = event => {
        setFilmToCollection(film)
        toggleIsFilmInCollection(true)
    }
    const removeBtnHandler = event => {
        removeFilmFromCollection(film)
        toggleIsFilmInCollection(false)
    }

    return (
        <Container>
            <div className='film'>
                <div><img src={film.poster_path} height={IMG_HEIGHT} alt=""/></div>
                <div className="film-info">
                    <FilmCardAbout film={film}/>
                    <div>
                        <Button color='secondary' size='large' variant='contained'
                                style={{backgroundColor: '#db2428', marginRight: '10px'}}
                                onClick={addBtnHandler} disabled={isFilmInCollection}
                        >
                            Add to My Collection
                        </Button>
                        <Button color='secondary' size='large' variant='contained'
                                style={{backgroundColor: '#db2428'}} onClick={removeBtnHandler}
                                disabled={!isFilmInCollection}
                        >
                            Remove from collection
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default connect(mapStateToProps, {
    getFilmInfo,
    setInitialStateToFilmCard,
    toggleIsFilmInCollection,
    setFilmToCollection,
    removeFilmFromCollection
})(FilmCard)