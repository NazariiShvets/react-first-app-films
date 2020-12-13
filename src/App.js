import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import MyMovies from './Components/MyMovies/MyMovies'
import Header from './Components/Header/Header'
import Films from './Components/Films/Films'
import Serials from './Components/Serials/Serials'
import Home from './Components/Home/Home'
import FilmCard from './Components/FilmCard/FilmCard'
import Search from './Components/Search/Search'
import Footer from './Components/Footer/Footer'
import './App.scss'
import {Box, Container} from '@material-ui/core'


const App = () => (
    <Box component='div' className='App'>
        <Header/>
        <Container component='main'>
            <Switch>
                <Route path='/my_movies' component={MyMovies}/>
                <Route path='/films' component={Films}/>
                <Route path='/serials' component={Serials}/>
                <Route path='/home' component={Home}/>
                <Route path='/info/:id' component={FilmCard}/>
                <Route path='/search' component={Search}/>
                <Route path='/' exact>
                    <Redirect to='/home'/>
                </Route>
            </Switch>
        </Container>
        <Footer/>
    </Box>
)

export default App



