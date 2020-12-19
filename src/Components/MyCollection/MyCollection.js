import React, {useState} from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import {Container} from '@material-ui/core'
import FilmItems from '../Common/FilmItems'
import '../Common/Common.scss'


const mapStateToProps = state => ({
    filmsInCollection: state.myCollection.filmsInCollection,
})

const MyCollection = ({filmsInCollection, ...props}) => {
    const [isShowFilm, setIsShowFilm] = useState(false)
    return (
        <Container>
            <div>You added to Collection a {filmsInCollection.length} film</div>
            <hr/>
            <Button color='secondary' variant='contained'
                    onClick={() => setIsShowFilm(prevState => !prevState)}>{isShowFilm ? 'Hide films' : 'Show films'}
            </Button>
            <hr/>
            {isShowFilm && <FilmItems films={filmsInCollection}/>}
        </Container>
    )
}

export default connect(mapStateToProps, {})(MyCollection)