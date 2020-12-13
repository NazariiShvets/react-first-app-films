import React from 'react'
import {NavLink} from 'react-router-dom'
import {Button, Typography} from '@material-ui/core'
import './Common.scss'


export const NavLinkButton = ({to, text, variant, children}) => (
    <Button>
        <NavLink to={to} className='nav__link'>
            <Typography variant={variant}>
                {children || text}
            </Typography>
        </NavLink>
    </Button>
)