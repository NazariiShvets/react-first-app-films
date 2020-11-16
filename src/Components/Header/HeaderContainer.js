import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {clearInputText, setTextToInput, } from "../../Redux/headerReducer";

const mapStateToProps = state => ({
    inputText: state.header.inputText,
})


class HeaderContainer extends React.Component {

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        )
    }
}


export default connect(mapStateToProps, {
    setTextToInput, clearInputText,
})(withRouter(HeaderContainer))