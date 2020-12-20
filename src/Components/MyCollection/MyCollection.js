import React, {useState} from 'react'
import {connect} from 'react-redux'
import FilmItems from '../Common/FilmItems'
import Button from '@material-ui/core/Button'
import '../Common/Common.scss'


const mapStateToProps = state => ({
    filmsInCollection: state.myCollection.filmsInCollection,
})

const MyCollection = ({filmsInCollection, ...props}) => {
    const [isShowFilm, setIsShowFilm] = useState(false)
    return (
        <div className='container'>
            <div className='flex-center-center-column'>
                <div style={{margin: '20px'}}>You added to Collection a {filmsInCollection.length} film</div>
                <Button color='secondary' variant='contained' style={{width: 500, height: 50}}
                        onClick={() => setIsShowFilm(prevState => !prevState)}
                >
                    {isShowFilm ? 'Hide films' : 'Show films'}
                </Button>
            </div>
            {isShowFilm && <FilmItems films={filmsInCollection}/>}
        </div>
    )
}

export default connect(mapStateToProps, {})(MyCollection)