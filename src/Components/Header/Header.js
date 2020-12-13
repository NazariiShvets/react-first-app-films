import React from 'react'

import Login from './Login'
import NavLinks from './NavLinks'
import {NavLinkImg} from '../Common/NavLinkImg'
import {NavLinkButton} from '../Common/NavLinkButton'
import headerLogoImage from '../../img/main-logo.svg'
import {Box, Container, Grid} from '@material-ui/core'
import './Header.scss'


const Header = () => (
    <Box component='header' className='header'>
        <Container>
            <Grid container justify='space-between' alignItems='center'>
                <NavLinkImg to='/home' src={headerLogoImage} height='55'/>
                <NavLinks/>
                <NavLinkButton to='/search' text='SEARCH' variant='h6'/>
                <Login/>
            </Grid>
        </Container>
    </Box>
)


export default Header

