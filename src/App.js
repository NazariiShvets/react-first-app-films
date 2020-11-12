import React, {useState} from "react"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import MyMovies from "./Components/MyMovies/MyMovies";
import Films from "./Components/Films/Films";
import Serials from "./Components/Serials/Serials";
import Cartoons from "./Components/Cartoons/Cartoons";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

import './App.scss'

const App = ({state, dispatch}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <Header/>
                    <main className="main-component">
                        <Route path='/my_movies' render={MyMovies}/>
                        <Route path='/films' render={Films}/>
                        <Route path='/serials' render={Serials}/>
                        <Route path='/cartoons' render={Cartoons}/>
                        <Route path='/home'
                               render={() => <Home
                                   items={state.mainPageReducer.home.items} activeIndex={activeIndex}
                                                   setActiveIndex={setActiveIndex}
                                                   animating={animating}
                                                   setAnimating={setAnimating}/>}/>
                        <Route path='/' exact>
                            <Redirect to='/home'/>
                        </Route>
                    </main>
                    <Footer socialLinks={state.footerReducer.socialLinks}/>
                </div>
            </Switch>
        </BrowserRouter>
    )
}

export default App
