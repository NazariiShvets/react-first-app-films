import React from 'react'
import {NavLink} from 'react-router-dom'
import {Button, Typography} from '@material-ui/core'
import './Common.scss'


const NavLinkButton = ({to, text, variant, children}) => (
    <NavLink to={to}>
        <Button>
            <Typography className='nav__link' variant={variant}>
                {children || text}
            </Typography>
        </Button>
    </NavLink>
)

export default NavLinkButton