import React from 'react'
// import {BrowserRouter} from "react-router-dom";
import headerLogoImage from '../../img/main-logo.svg'
import headerLoginImage from '../../img/login-icon.svg'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <img src={headerLogoImage} alt="Main-Logo" className="header__logo"/>
                    <div className="header__movies-categories movies-categories">
                        <div className="movies-categories__item">My movies</div>
                        <div className="movies-categories__item">Films</div>
                        <div className="movies-categories__item">Serials</div>
                        <div className="movies-categories__item">Cartoons</div>
                    </div>
                    <div className="header__search">
                        <input type="text"/>
                        <button> Поиск </button>
                    </div>
                    <div className="header__login">
                        <img src={headerLoginImage} alt="Login"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

