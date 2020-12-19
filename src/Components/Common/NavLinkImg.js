import React from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from '@material-ui/core'


export const NavLinkImg = ({to, src, className, alt, height}) => (
    <NavLink to={to}>
        <Button>
            <img src={src} height={height} alt={alt} className={className}/>
        </Button>
    </NavLink>
)