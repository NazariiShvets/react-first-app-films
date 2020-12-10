import React from 'react'
import headerLogoImage from '../../img/main-logo.svg'
import headerLoginImage from '../../img/login-icon.svg'
import {withRouter,NavLink} from 'react-router-dom'
import './Header.scss'


const Header = props => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <NavLink to='/home'>
                        <img src={headerLogoImage} alt="Main-Logo" className="header__logo"/>
                    </NavLink>
                    <div className="header__movies-categories movies-categories">
                        <NavLink to='/my_collection' className="movies-categories__item">My Collection</NavLink>
                        <NavLink to='/films' className="movies-categories__item">Films</NavLink>
                        <NavLink to='/serials' className="movies-categories__item">Serials</NavLink>
                    </div>
                    <div>
                        <NavLink to='/search' className="movies-categories__item">SEARCH</NavLink>
                    </div>
                    <div className="header__login">
                        <img src={headerLoginImage} alt="Login"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default withRouter(Header)

