import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTvs, setInitialStateToSerials} from '../../Redux/serialsPageReducer'
import {Spinner} from 'reactstrap'
import FilmsSlider from '../Common/FilmsSlider'
import {Container} from '@material-ui/core'


const mapStateToProps = state => ({
    tvsPopularToSlider: state.serialsPage.tvsPopularToSlider,
    tvsTopRatedToSlider: state.serialsPage.tvsTopRatedToSlider,
    tvsOnAirToSlider: state.serialsPage.tvsOnAirToSlider,
    tvsAiringTodayToSlider: state.serialsPage.tvsAiringTodayToSlider,
    isFetching: state.serialsPage.isFetching,
})

const Serials = ({setInitialStateToSerials, getTvs, ...props}) => {
    useEffect(() => {
        getTvs(1)
        return () => {
            setInitialStateToSerials()
        }
    }, [])
    if (props.isFetching) {
        return <div className='container'><Spinner/></div>
    }
    return (
        <Container>
            <FilmsSlider films={props.tvsTopRatedToSlider}/>
            <FilmsSlider films={props.tvsPopularToSlider}/>
            <FilmsSlider films={props.tvsOnAirToSlider}/>
            <FilmsSlider films={props.tvsAiringTodayToSlider}/>
        </Container>
    )
}

export default connect(mapStateToProps, {setInitialStateToSerials, getTvs})(Serials)