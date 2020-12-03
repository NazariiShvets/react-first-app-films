import React from 'react'
import headerLogoImage from '../../img/main-logo.svg'
import headerLoginImage from '../../img/login-icon.svg'
import {NavLink} from 'react-router-dom'
import {Button} from 'reactstrap'
import './Header.scss'


const Header = props => {
    const inputHandler = e => {
        props.setTextToInput(e.target.value)
    }

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
                    <div className="">
                        <input className='input' type="text" value={props.inputText} onInput={inputHandler}/>
                        <NavLink to={`/search/${props.formatedText}`} >
                            <Button onClick={props.buttonHandler} color="warning">Поиск</Button>
                        </NavLink>
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

