import React from 'react'

import {connect} from 'react-redux'
import './Serials.scss'


const mapStateToProps = state => ({
    serials: state.serialsPage.serials
})

const Serials = ({...props}) => {
    return (
        <div className='container'>Serials</div>
    )
}

export default connect(mapStateToProps, {})(Serials)