import React from 'react'
import {connect} from 'react-redux'
import Serials from './Serials'
import {setSerialsAC} from '../../Redux/serialsPageReducer'


const mapStateToProps = state => {
    return {
        serials: state.serialsPage.serials
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSerials: (serials) => {
            dispatch(setSerialsAC(serials))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Serials)