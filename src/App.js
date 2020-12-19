import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Header from './Components/Header/Header'
import Films from './Components/Films/Films'
import Serials from './Components/Serials/Serials'
import Home from './Components/Home/Home'
import FilmCard from './Components/FilmCard/FilmCard'
import Search from './Components/Search/Search'
import Footer from './Components/Footer/Footer'
import MyCollection from './Components/MyCollection/MyCollection'
import './App.scss'


const App = () => (
    <div className='App'>
        <Header/>
        <div className='container app-content'>
            <Switch>
                <Route path='/my_movies' component={MyCollection}/>
                <Route path='/films' component={Films}/>
                <Route path='/serials' component={Serials}/>
                <Route path='/home' component={Home}/>
                <Route path='/info/:id' component={FilmCard}/>
                <Route path='/search' component={Search}/>
                <Route path='/my_collection' component={MyCollection}/>
                <Route path='/' exact>
                    <Redirect to='/home'/>
                </Route>
            </Switch>
        </div>
        <Footer/>
    </div>
)

export default App



