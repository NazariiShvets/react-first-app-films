import React, {useEffect} from 'react'
import {authAPI} from '../../api/authAPI'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Button from '@material-ui/core/Button'
import {NavLink} from 'react-router-dom'
import './Header.scss'


//
// Refactor to MaterialUI
//

const Login = ({...props}) => {
    let isLoggedIn = false
    useEffect(() => {
        // const data = Object.keys(authAPI.createRequestToken())
    },[])
    return (
        <Button variant="outlined" size='large' startIcon={<ExitToAppIcon/>}>
            <NavLink to='/search' className='nav__link'>
                {isLoggedIn ? 'Logout' : 'Login'}
            </NavLink>
        </Button>
    )

}

export default Login