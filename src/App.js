import React from "react"
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import MyMovies from "./Components/MyMovies/MyMovies";
import HomeContainer from "./Components/Home/HomeContainer";
import CartoonsContainer from "./Components/Cartoons/CartoonsContainer";
import SerialsContainer from "./Components/Serials/SerialsContainer";
import FilmsContainer from "./Components/Films/FilmsContainer";
import './App.scss'
import FooterContainer from "./Components/Footer/FooterContainer";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <main className="main-component">
                <Switch>
                    <Route path='/my_movies' component={MyMovies}/>
                    <Route path='/films' component={FilmsContainer}/>
                    <Route path='/serials' component={SerialsContainer}/>
                    <Route path='/cartoons' component={CartoonsContainer}/>
                    <Route path='/home' component={HomeContainer}/>
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



