import React from 'react'

import ButtonGroup from '@material-ui/core/ButtonGroup'
import {NavLinkButton} from '../Common/NavLinkButton'


const NavLinks = () => (
    <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
        <NavLinkButton to='/my_collection' text='My Collection' variant='h6'/>
        <NavLinkButton to='/films' text='Films' variant='h6'/>
        <NavLinkButton to='/serials' text='Serials' variant='h6'/>
    </ButtonGroup>
)

export default NavLinks