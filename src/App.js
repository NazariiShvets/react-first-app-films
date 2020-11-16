import React from "react"
import {Redirect, Route, Switch} from "react-router-dom";
import MyMovies from "./Components/MyMovies/MyMovies";
import HomeContainer from "./Components/Home/HomeContainer";
import SerialsContainer from "./Components/Serials/SerialsContainer";
import FilmsContainer from "./Components/Films/FilmsContainer";
import FooterContainer from "./Components/Footer/FooterContainer";
import FilmCardContainer from "./Components/FilmCard/FilmCardContainer";
import './App.scss'
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
    return (
        <div className="App">
            <HeaderContainer/>
            <main className="main-component">
                <Switch>
                    <Route path='/my_movies' component={MyMovies}/>
                    <Route path='/films' component={FilmsContainer}/>
                    <Route path='/serials' component={SerialsContainer}/>
                    <Route path='/home' exact component={HomeContainer}/>
                    <Route path='/info/:id'  component={FilmCardContainer} />
                    <Route path='/' exact>
                        <Redirect to='/home'/>
                    </Route>
                </Switch>
            </main>
            <FooterContainer/>
        </div>
    )
}

export default App



