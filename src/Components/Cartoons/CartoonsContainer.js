import React from 'react'
import {connect} from "react-redux";
import Cartoons from "./Cartoons";
import {setCartoonsAC} from "../../Redux/cartoonsPageReducer";

const mapStateToProps = state => {
    return {
        cartoons: state.cartoonsPage.cartoons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCartoons : (cartoons) => {
            dispatch( setCartoonsAC(cartoons) )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cartoons)