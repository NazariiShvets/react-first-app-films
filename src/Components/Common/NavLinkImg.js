import React from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from '@material-ui/core'


export const NavLinkImg = ({to, src, className, alt, height}) => (
    <Button>
        <NavLink to={to}>
            <img src={src} height={height} alt={alt} className={className}/>
        </NavLink>
    </Button>
)