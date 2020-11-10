import React from 'react'

import './MainComponent.scss'
import Header from "../Header/Header";

const MainComponent = () =>{
    return (
        <div className="main-component">
            <Header/>
            <section className="random-film"></section>
            <section className="recomended"></section>
        </div>
    )
}

export default MainComponent