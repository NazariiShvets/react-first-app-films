import React from 'react'
import headerLogoImage from '../../img/main-logo.svg'
import headerLoginImage from '../../img/login-icon.svg'
import {NavLink} from "react-router-dom";
import {Button} from "reactstrap";
import './Header.scss'


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <NavLink to='/home'>
                        <img src={headerLogoImage} alt="Main-Logo" className="header__logo"/>
                    </NavLink>
                    <div className="header__movies-categories movies-categories">
                        <NavLink to='/my_movies' className="movies-categories__item">My movies</NavLink>
                        <NavLink to='/films' className="movies-categories__item">Films</NavLink>
                        <NavLink to='/serials' className="movies-categories__item">Serials</NavLink>
                        <NavLink to='/cartoons' className="movies-categories__item">Cartoons</NavLink>
                    </div>
                    <div className="">
                        <input type="text"/>
                        <Button  color="primary" >Поиск</Button>{' '}
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

