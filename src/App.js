import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import MyMovies from './Components/MyMovies/MyMovies'
import HomeContainer from './Components/Home/Home'
import SerialsContainer from './Components/Serials/SerialsContainer'
import FilmsContainer from './Components/Films/Films'
import FooterContainer from './Components/Footer/FooterContainer'
import FilmCardContainer from './Components/FilmCard/FilmCard'
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'
import './App.scss'


const App = () => {
    return (
        <div className="App">
            <Header/>
            <main className="main-component ">
                <Switch>
                    <Route path='/my_movies' component={MyMovies}/>
                    <Route path='/films' component={FilmsContainer}/>
                    <Route path='/serials' component={SerialsContainer}/>
                    <Route path='/home' component={HomeContainer}/>
                    <Route path='/info/:id' component={FilmCardContainer}/>
                    <Route path='/search' component={Search}/>
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



